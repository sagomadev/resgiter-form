import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long." })
    .max(200, { message: "Name must be at most 200 characters long." }),
  email: z.string().email({
    message: "Please provide a valid email address.",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  confirmPassword: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  role: z.enum(["admin", "user"], {
    errorMap: () => ({ message: "Invalid role." }),
  }),
});
