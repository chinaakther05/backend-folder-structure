import { Router } from "express";
import authRoute from "../modules/auth/auth.route"; 

const router = Router();


router.use("/auth", authRoute);

//  route
router.get("/", (req, res) => {
  console.log("API HIT")
  res.json({
    success: true,
    message: "API is working ",
  });
});

export default router;