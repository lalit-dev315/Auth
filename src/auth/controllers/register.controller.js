import { registerService } from "../services/index.js";
import ApiResponse from "../../utils/apiResponse.js";

const registerController = async (req, res) => {
    const body = req.body;
    const data = await registerService(body);
    return ApiResponse.created(res, "User registered successfully", data);
};

export default registerController;
