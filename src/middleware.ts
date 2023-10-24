import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.cookies.has("token")) {
    //TODO
    //Token verify - JWT
    if (request.nextUrl.pathname !== "/home") {
      return NextResponse.redirect(new URL("/home", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
