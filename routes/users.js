import express from "express";
import { googleAuth } from "../controllers/auth.js";

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
} from "../controllers/users.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", registerUser);
router.get("/:userId", auth, getUser);
router.patch("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);

router.post("/login", loginUser);
router.post("/auth", googleAuth);
export default router;
