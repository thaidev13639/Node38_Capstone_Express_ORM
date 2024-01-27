import express from "express";
import {
  handlUpdateUser,
  handleLogin,
  handleSignUp,
  handleUploadAvatar,
} from "../controller/userController.js";
import { verifyToken } from "../config/jwt.js";
import uploadCloud from "../config/cloudinary.config.js";

const userRoutes = express.Router();

userRoutes.post("/login", handleLogin);
userRoutes.post("/signup", handleSignUp);
userRoutes.post(
  "/upload_avatar",
  verifyToken,
  uploadCloud.single("file"),
  handleUploadAvatar
);
userRoutes.put("/update-user", verifyToken, handlUpdateUser);

export default userRoutes;
