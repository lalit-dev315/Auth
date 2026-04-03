import { loginService } from "../services/index.js";
import ApiResponse from "../../utils/apiResponse.js";

const loginController = async (req, res) => {
    const body = req.body;
    const { identifier, password } = body;
    const data = await loginService(identifier, password);
    return ApiResponse.ok(res, "Login successful", data);
};

export default loginController;
