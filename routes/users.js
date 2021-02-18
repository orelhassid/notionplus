import express from "express";

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
router.post("/login", loginUser);
router.get("/:userId", auth, getUser);
router.patch("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);

export default router;
