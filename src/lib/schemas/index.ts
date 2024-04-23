import { z } from "zod";

export const formSchema = z.object({
 first_name: z.string().min(2, {
  message: "Username must be at least 2 characters.",
 }),
 last_name: z.string().min(2, {
  message: "Username must be at least 2 characters.",
 }),
 email: z
  .string()
  .min(1, { message: "Please enter your email." })
  .email("This is not a valid email."),
 phone: z.string().min(11, {
  message: "phone number must be at least 11 characters.",
 }),
 organization_name: z.string().min(2, {
  message: "Username must be at least 2 characters.",
 }),
 website: z.string().min(1, "first name is required").max(100),
 zip_code: z.string().min(1, "zip code is required").max(100),
 message: z.string().min(1, "message is required").max(100),
 approved: z.boolean(),
 confirm: z.boolean(),
});
