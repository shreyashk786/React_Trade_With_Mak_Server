import express from "express";
const router = express.Router();

import { signup, signin, googleSignIn } from "../controllers/user.js";
import {searAdduser
} from "../controllers/adduser.js";
router.post("/signup", signup);
router.post("/signin", signin);
//router.get("/", searAdduser);

export default router;
