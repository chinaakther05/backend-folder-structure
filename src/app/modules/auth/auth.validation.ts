import { z } from "zod";

// REGISTER validation
export const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be 6 characters"),
});

// LOGIN validation
export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6),
});

// CHANGE PASSWORD validation
export const changePasswordSchema = z.object({
  email: z.string().email(),
  oldPassword: z.string(),
  newPassword: z.string().min(6),
});

// FORGET PASSWORD validation
export const forgetPasswordSchema = z.object({
  email: z.string().email(),
  newPassword: z.string().min(6),
});