import { authOptions } from "@/utils/authoptions";
import NextAuth from "next-auth/next";

// handle auth route funtion

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };