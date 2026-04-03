import User from "../model.js";
import ApiError from "../../utils/apiError.js";
import jwt from "jsonwebtoken";

const { JWT_ACCESS_TOKEN_SECRET, JWT_REFRESH_TOKEN_SECRET } = process.env;

const loginService = async (identifier, password) => {
    const user = await User.findOne({
        $or: [
            { email: identifier, password },
            { username: identifier, password },
        ],
    });

    if (!user) {
        throw new ApiError("Invalid username or password", 401);
    }

    const payload = { userId: user._id };
    const accessToken = generateAccessToken(payload, JWT_ACCESS_TOKEN_SECRET);
    const refreshToken = generateRefreshToken(
        payload,
        JWT_REFRESH_TOKEN_SECRET,
    );

    user.refreshToken = refreshToken;
    user.save();

    return {
        accessToken,
        refreshToken,
    };
};

const generateAccessToken = (payload, secret) => {
    const accessToken = jwt.sign(payload, secret, { expiresIn: "10m" });
    return accessToken;
};

const generateRefreshToken = (payload, secret) => {
    const refreshToken = jwt.sign(payload, secret, { expiresIn: "7d" });
    return refreshToken;
};

export default loginService;
