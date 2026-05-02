import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Allow valid routes
  const validRoutes = ['/', '/servicios', '/planes', '/proceso', '/contacto'];
  const isValidRoute = validRoutes.some(route => pathname === route || pathname === route + '/');
  
  // If route is not valid and it's not an API, _next, static, etc, redirect to home
  if (!isValidRoute && !pathname.startsWith('/api') && !pathname.startsWith('/_next') && !pathname.startsWith('/static') && pathname !== '/favicon.ico') {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};