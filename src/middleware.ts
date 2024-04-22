export { default } from "next-auth/middleware";

export const config = {
 matcher: [
  "/dashboard",
  "/",
  "/organization/:path*",
  "/employee/:path*",
  "/employees",
  // "departments",
 ],
};
