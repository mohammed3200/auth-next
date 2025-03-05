import NextAuth from "next-auth"
import authConfig from "@/auth.config"
 
// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)
 
// 2. Wrapped middleware option
const { auth } = NextAuth(authConfig)

export default auth((req) => {
 const isLoggedIn = !!req.auth;
  console.log("ROUTE: ", req.nextUrl.pathname);
  console.log("isLoggedIn: ", isLoggedIn);
})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
} 