import express from "express";
import {
    registerController,
    loginController,
    getProfileController,
    logoutController,
    forgotPasswordController,
    resetPasswordController,
} from "./controllers/index.js";
import {
    registerValidator,
    loginValidator,
    forgotPasswordValidator,
    resetPasswordValidator,
} from "./validators/index.js";
import isLoggedIn from "./middlewares/isLoggedIn.js";

const router = express.Router();

router.post("/register", registerValidator, registerController);
router.post("/login", loginValidator, loginController);
router.get("/profile", isLoggedIn, getProfileController);
router.post("/logout", isLoggedIn, logoutController);
router.post(
    "/forgot-password",
    forgotPasswordValidator,
    forgotPasswordController,
);
router.post("/reset-password", resetPasswordValidator, resetPasswordController);

export default router;
