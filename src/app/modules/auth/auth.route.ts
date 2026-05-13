import { Router } from "express";
import { authController } from "./auth.controller";

const router = Router();


router.post("/register", authController.register);


router.post("/login", authController.login);

router.post("/change-password", authController.changePassword);
router.post("/forget-password", authController.forgetPassword);

export default router;