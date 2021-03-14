import express from "express";
import { googleAuth } from "../controllers/auth.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/google", googleAuth);
export default router;
