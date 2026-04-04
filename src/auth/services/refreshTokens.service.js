import User from "../model.js";
import crypto from "crypto";
import ApiError from "../../utils/apiError.js";
import {
    generateAccessToken,
    generateRefreshToken,
} from "../../utils/tokens.js";

const refreshTokensService = async (refreshToken) => {
    const hashedRefreshToken = crypto
        .createHash("sha256")
        .update(refreshToken)
        .digest("hex");

    const user = await User.findOne({ refreshToken: hashedRefreshToken });

    if (!user) {
        throw new ApiError("Invalid refresh token", 401);
    }
    const { JWT_ACCESS_TOKEN_SECRET, JWT_REFRESH_TOKEN_SECRET } = process.env;
    const payload = { userId: String(user._id) };
    const accessToken = generateAccessToken(payload, JWT_ACCESS_TOKEN_SECRET);
    const newRefreshToken = generateRefreshToken(
        payload,
        JWT_REFRESH_TOKEN_SECRET,
    );
    user.refreshToken = newRefreshToken;

    user.save();

    return {
        accessToken,
        refreshToken: newRefreshToken,
    };
};

export default refreshTokensService;
