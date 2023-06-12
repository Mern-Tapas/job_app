import { NextResponse } from "next/server"
export function middleware(request) {
  const nextUrl = request.url

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/dashboard/user', request.url))
  }
}