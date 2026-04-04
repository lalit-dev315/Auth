import refreshTokensService from "../services/refreshTokens.service.js";
import ApiResponse from "../../utils/apiResponse.js";

const refreshTokensController = async (req, res) => {
    const { refreshToken } = req.body;
    const data = await refreshTokensService(refreshToken);
    return ApiResponse.ok(res, "New tokens issued", data);
};

export default refreshTokensController;
