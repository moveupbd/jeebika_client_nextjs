import { NextResponse } from "next/server";

let session = false;

// This function can be marked `async` if using `await` inside
export default function middleware(request) {
  if (session) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/user/:path*", "/employer/:path*"],
};
