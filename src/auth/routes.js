import express from "express";
import {
    registerController,
    loginController,
    getProfileController,
} from "./controllers/index.js";
import { registerValidator } from "./validators/index.js";

const router = express.Router();

router.post("/register", registerValidator, registerController);
router.post("/login", loginController);
router.get("/profile", getProfileController);

export default router;
