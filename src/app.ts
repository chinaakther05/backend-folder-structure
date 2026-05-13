import express from "express";
import type { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import routes from "./app/routes/routes";



dotenv.config();

const app: Application = express();

// 🧠 middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true}))

// 🧠 test route
app.get("/", (req: Request, res: Response) => {
  res.json(" Server is running...");
});

// 🧠 main routes
 app.use("/api", routes);

export default app;