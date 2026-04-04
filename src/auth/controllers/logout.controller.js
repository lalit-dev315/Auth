import { logoutService } from "../services/index.js";
import ApiResponse from "../../utils/apiResponse.js";

const logoutController = async (req, res) => {
    const userId = req.userId;
    await logoutService(userId);
    return ApiResponse.ok(res, "Logout successful");
};

export default logoutController;
