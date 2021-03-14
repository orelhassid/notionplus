import express from "express";

import { createSite, getSites, getSite } from "../controllers/sites.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/all", getSites);
router.get("/", auth, getSite);
router.post("/", auth, createSite);
export default router;
