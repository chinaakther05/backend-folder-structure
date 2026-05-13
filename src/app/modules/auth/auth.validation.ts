import { z } from "zod";

// registervalidation
export const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string(),
  password: z.string().min(6, "Password must be 6 characters"),
});

// login validation
export const loginSchema = z.object({
  email: z.string(),
  password: z.string().min(6),
});

// change password validation
export const changePasswordSchema = z.object({
  email: z.string(),
  oldPassword: z.string(),
  newPassword: z.string().min(6),
});

// forget password validation
export const forgetPasswordSchema = z.object({
  email: z.string(),
  newPassword: z.string().min(6),
});