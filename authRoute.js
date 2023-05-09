import express from "express";
import { login_user } from "../controllers/authController";

const authRouter = Router();
authRouter.post("/api/users/signup",post_user);
authRouter.post("/api/users/login",login_user);
export{authRouter}