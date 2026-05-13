import { Request, Response } from "express";
import { authService } from "./auth.service";

// Register 
const register = (req: Request, res: Response) => {
  try {
        console.log("Register :", req.body);
    const result = authService.register(req.body);

    res.status(201).json({
      success: true,
      message: result.message,
      data: result.user,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//  Login
const login = (req: Request, res: Response) => {
  try {
     console.log("Login :", req.body);
    const { email, password } = req.body;

    const result = authService.login(email, password);

    res.status(200).json({
      success: true,
      message: result.message,
      data: result.user,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Change password
const changePassword = (req: Request, res: Response) => {
  try {
    console.log("Change Password:", req.body);
    const { email, oldPassword, newPassword } = req.body;

    const result = authService.changePassword(
      email,
      oldPassword,
      newPassword
    );

    res.json({
      success: true,
      message: result.message,
      data: result.user,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Forget Password
const forgetPassword = (req: Request, res: Response) => {
  try {
    console.log("Forget Password :", req.body);
    const { email, newPassword } = req.body;

    const result = authService.forgetPassword(email, newPassword);

    res.json({
      success: true,
      message: result.message,
      data: result.user,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const authController = {
  register,
  login,
  changePassword,
  forgetPassword,
};