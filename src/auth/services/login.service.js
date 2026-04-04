import User from "../model.js";
import ApiError from "../../utils/apiError.js";
import {
    generateAccessToken,
    generateRefreshToken,
} from "../../utils/tokens.js";
import bcrypt from "bcryptjs";
import cache from "../../utils/cache.js";

const { JWT_ACCESS_TOKEN_SECRET, JWT_REFRESH_TOKEN_SECRET } = process.env;

const loginService = async (identifier, password) => {
    const user = await User.findOne({
        $or: [{ email: identifier }, { username: identifier }],
    });

    if (!user) {
        throw new ApiError("Invalid username or password", 401);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new ApiError("Invalid username or password", 401);
    }

    const payload = { userId: String(user._id) };
    const accessToken = generateAccessToken(payload, JWT_ACCESS_TOKEN_SECRET);
    const refreshToken = generateRefreshToken(
        payload,
        JWT_REFRESH_TOKEN_SECRET,
    );

    user.refreshToken = refreshToken;
    user.save();

    // create session
    const cacheKey = `${user._id}`;
    cache.add(cacheKey, true);

    return {
        accessToken,
        refreshToken,
    };
};

export default loginService;
