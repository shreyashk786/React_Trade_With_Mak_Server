
import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {
  createAdduser,
  deleteAdduser,
  getAdduser,
  getAddusers,
  getAddusersbyuser,
  updateAdduser,
  searAdduser
} from "../controllers/adduser.js";

router.post("/", createAdduser);
router.get("/", getAddusers);
router.get("/:id", getAdduser);
router.get("/search", searAdduser);
router.delete("/:id", deleteAdduser);
router.put("/:id", updateAdduser);
router.get("/userTours/:id", auth, getAddusersbyuser);

export default router;

