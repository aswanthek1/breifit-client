
import { NextResponse, NextRequest } from "next/server";
import { Get } from "./lib/axios";
import { configurations } from './config';
import Cookies from 'js-cookie'
const { BASE_URL } = configurations;
import { useRouter } from "next/navigation";

const protectedRoutes = ["/create/author"]
const session = false

export default async function middleware(req: NextRequest, res: any) {
    // const router = useRouter();
    const token = req.cookies.get('token')?.value
    // const token = Cookies.get('token')
    if (protectedRoutes.includes(req.nextUrl.pathname)) {
        console.log(token, "headers")
        try {
            // const created = await Get('/author/authenticate', null, token)
            const response = await fetch(`${BASE_URL}author/authenticate`, {
                headers: {
                    Authorization: `${token}`,
                },
                credentials: 'include',
            });
            const created = await response.json()
            console.log(created, "created")
            if (created?.accessToken) {
                // To change a cookie, first create a response
                // const response = NextResponse.next()

                // // Set a cookie
                // response.cookies.set('token', created?.accessToken)

                // const cookie = new Cook

                req.cookies.set('token', created?.accessToken)
                console.log(created?.accessToken, "created.accessToken")
                // Cookies.set('token', created?.accessToken)
                console.log(req.cookies.get('token'), 'ininin')
                // res.cookies.set('token', created?.accessToken)
            }
            if (created?.error == 'true' || created?.status != '200') {
                const absoluteUrl = new URL('/login', req.nextUrl.origin)
                console.log(absoluteUrl.toString(), "absoluteURlrlrlrlr")
                return NextResponse.redirect(absoluteUrl.toString())
            }
            console.log(req.nextUrl.pathname,req.nextUrl.origin, "req.nextUrl.pathname at last")
            // router.push(req.nextUrl.pathname)
        } catch (error) {
            console.log(error, 'at middleware')
        }
    }
}