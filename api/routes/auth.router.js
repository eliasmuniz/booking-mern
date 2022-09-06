import express from "express";
// Controllers
import { login, register } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", register)
authRouter.post("/login", login)

 
export default authRouter