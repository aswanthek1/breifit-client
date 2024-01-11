
import { NextResponse, NextRequest } from "next/server";
import { Get } from "./lib/axios";
import { configurations } from './config';
const { BASE_URL } = configurations;

const protectedRoutes = ["/create/author"]
const session = false

export default async function middleware(req:NextRequest) {
    const token = req.cookies.get('token')?.value
    // const token = localStorage.getItem("token")
    // if( token && protectedRoutes.includes(req.nextUrl.pathname)) {
        if(token && protectedRoutes.includes(req.nextUrl.pathname)) {
            // console.log(req.cookies.get('token'), "headers")
        try {
            // const created = await Get('/author/authenticate', null, token)
            const response = await fetch(`${BASE_URL}author/authenticate`, {
                headers: {
                  Authorization: `${token}`,
                },
              });
              const created = await response.json()
            console.log(created, "created")
            // const absoluteUrl = new URL('/login', req.nextUrl.origin)
            // return NextResponse.redirect(absoluteUrl.toString())
        } catch (error) {
            console.log(error, 'at middleware')
        }
    }
}