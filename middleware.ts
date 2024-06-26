
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { configurations } from './config';
import { cookies } from "next/headers";
import Cookies from 'js-cookie'
const { BASE_URL } = configurations;

const unProtectedRoutes = ["/login", '/register']
const session = false

export default async function middleware(request: NextRequest) {
    const cookieStore = cookies()
    const nextResponse = NextResponse.next()
    const token = cookieStore.get("token")
    // const token = nextResponse.cookies.get("token")
    console.log(token, 'token is here')
    try {
        if (!token) {
            console.log("No token at all\n");
            if (unProtectedRoutes.includes(request.nextUrl.pathname)) {
                return nextResponse
            }
            return NextResponse.redirect(new URL('/login', request.url))
        }
        else {
            const response = await fetch(`${BASE_URL}author/authenticate`, {
                headers: {
                    Authorization: `${token.value}`,
                },
                // credentials: 'include',
            });
            const created = await response.json()
            // console.log(created);
            if (created?.error == true) {
                console.log("Not verified token");
                if (unProtectedRoutes.includes(request.nextUrl.pathname)) {
                    return nextResponse
                }
                return NextResponse.redirect(new URL('/login', request.url))
            }
            else {
                console.log("Verified token");
                if (unProtectedRoutes.includes(request.nextUrl.pathname)) {
                    return NextResponse.redirect(new URL('/', request.url))
                }
                if (created?.accessToken) {
                    // nextResponse.cookies.set('accessToken', created?.accessToken, { maxAge: 20 })
                    // cookieStore.set("token", created.accessToken, {maxAge:20, path:'/'})
                    // Cookies.set("token", created.accessToken, {expires:30, path:'/'})
                }
                // console.log(nextResponse, 'responseo of next')
                return nextResponse
            }
        }
        // return nextResponse

    } catch (error) {
        console.log(error, 'at middleware')
    }
}

export const config = {
    matcher: ['/create/author', '/create/blog', '/blog/:blogid/edit', '/author', '/login', '/register']
}