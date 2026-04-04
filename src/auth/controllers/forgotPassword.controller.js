import { forgotPasswordService } from "../services/index.js";
import ApiResponse from "../../utils/apiResponse.js";

const forgotPasswordController = async (req, res) => {
    const { email } = req.body;
    const data = await forgotPasswordService(email);
    return ApiResponse.ok(res, "Reset password link sent successfully", data);
};

export default forgotPasswordController;
