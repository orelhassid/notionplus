import express from "express";

import {
  createSite,
  getSites,
  getSite,
  deleteSite,
  updateSite,
  getSiteByDomain,
  getSiteById,
} from "../controllers/sites.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/all", getSites);
router.get("/", auth, getSite);
// router.get("/:siteId", getSiteById);
router.get("/:domain", getSiteByDomain);
router.post("/", auth, createSite);
router.put("/", auth, updateSite);
router.delete("/:id", auth, deleteSite);
export default router;
