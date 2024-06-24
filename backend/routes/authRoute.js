import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser); //localhost:5000/api/auth/register
router.post("/login", loginUser); //localhost:5000/api/auth/login

export default router;
