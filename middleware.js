import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export default function middleware(request) {
  const cookieStore = cookies();

  const token = cookieStore.getAll();

  console.log(request.cookies.get("access_token"));

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/user/:path*", "/employer/:path*"],
};
