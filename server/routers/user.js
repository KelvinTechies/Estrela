import express from "express";
import {
  deleteUser,
  getUser,
  login,
  logout,
  register,
  updateUser,
} from "../controller/users.js";
import authorizeUser from "../middleware/authorizeUser.js";
const userRouters = express.Router();

userRouters.post("/register", register);
userRouters.post("/login", login);
userRouters.post("/logout", authorizeUser, logout);
userRouters.get("/", authorizeUser, getUser);
userRouters.put("/", authorizeUser, updateUser);
userRouters.delete("/", authorizeUser, deleteUser);

export default userRouters;
