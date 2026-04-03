import { getProfileService } from "../services/index.js";
import ApiResponse from "../../utils/apiResponse.js";

const getProfileController = async (req, res) => {
    const userId = req.userId;
    const data = await getProfileService(userId);
    ApiResponse.ok(res, "success", data);
};

export default getProfileController;
