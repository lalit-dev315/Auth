import express from "express";
import {
    registerController,
    loginController,
    getProfileController,
} from "./controllers/index.js";
import { registerValidator, loginValidator } from "./validators/index.js";
import isLoggedIn from "./middlewares/isLoggedIn.js";

const router = express.Router();

router.post("/register", registerValidator, registerController);
router.post("/login", loginValidator, loginController);
router.get("/profile", isLoggedIn, getProfileController);

export default router;
