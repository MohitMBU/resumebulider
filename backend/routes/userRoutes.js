import express from "express";
import { registerUser, loginUser, getUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);

userRoutes.get("/profile", protect,getUserProfile);

export default userRoutes;