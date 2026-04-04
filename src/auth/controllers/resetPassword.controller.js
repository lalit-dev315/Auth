import { resetPasswordService } from "../services/index.js";
import ApiResponse from "../../utils/apiResponse.js";

const resetPasswordController = async (req, res) => {
    const body = req.body;
    const { token, password } = body;
    await resetPasswordService(token, password);
    return ApiResponse.ok(res, "Password reset successful");
};

export default resetPasswordController;
