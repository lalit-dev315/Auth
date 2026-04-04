import User from "../model.js";
import cache from "../../utils/cache.js";
import jwt from "jsonwebtoken";
import ApiError from "../../utils/apiError.js";

const resetPasswordService = async (token, password) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_RESET_TOKEN_SECRET);
        const { email } = decoded;

        const user = await User.findOne({ email });

        user.password = password;

        user.refreshToken = null;
        cache.del(String(user._id));

        user.save();
    } catch (error) {
        throw new ApiError(`Invalid Reset token: ${error.message || ""}`, 401);
    }
};

export default resetPasswordService;
