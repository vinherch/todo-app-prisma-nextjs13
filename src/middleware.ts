import { NextResponse, NextRequest } from "next/server";
import { verifyJWT } from "./utils/jwtHelper";

export async function middleware(request: NextRequest) {
  if (request.cookies.has("auth-token")) {
    //Check for empty value in cookie. (deleted cookie)
    if (request.cookies.get("auth-token")?.value === "") return NextResponse.next();

    //Get JWT
    const token = request.cookies.get("auth-token")!.value;

    //Verify JWT
    const verified = await verifyJWT(token);

    if (request.nextUrl.pathname !== "/home") {
      return NextResponse.redirect(new URL("/home", request.url));
    }
    return NextResponse.next();
  }

  if (request.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
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
