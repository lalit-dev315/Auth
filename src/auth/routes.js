import express from "express";
import {
    registerController,
    loginController,
    getProfileController,
    logoutController,
} from "./controllers/index.js";
import { registerValidator, loginValidator } from "./validators/index.js";
import isLoggedIn from "./middlewares/isLoggedIn.js";

const router = express.Router();

router.post("/register", registerValidator, registerController);
router.post("/login", loginValidator, loginController);
router.get("/profile", isLoggedIn, getProfileController);
router.post("/logout", isLoggedIn, logoutController);

export default router;
