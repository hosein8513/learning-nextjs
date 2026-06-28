import { NextResponse } from "next/server";
import { isLoggedIn } from "./actions/authAction";

export async function middleware(request) {
    const token = request.cookies.get("logintoken")?.value
    const isLogin = await isLoggedIn(token)
    const pathname = request.nextUrl.pathname

    if(pathname.startsWith('/userpanel') && !isLogin) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if(pathname.startsWith('/login') && isLogin) {
        return NextResponse.redirect(new URL('/userpanel', request.url))
    }
}

export const config = {
    matcher: ['/userpanel/:path*', '/login']
}