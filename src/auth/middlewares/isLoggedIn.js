import ApiError from "../../utils/apiError.js";
import jwt from "jsonwebtoken";
import User from "../model.js";

const { JWT_ACCESS_TOKEN_SECRET } = process.env;

const isLoggedIn = async (req, _, next) => {
    const authorization = req.headers["authorization"];
    const accessToken = authorization.split(" ")[1];

    if (!accessToken) {
        throw new ApiError(`Missing Access token`, 401);
    }

    try {
        const decoded = jwt.verify(accessToken, JWT_ACCESS_TOKEN_SECRET);
        const userId = decoded.userId;
        req.userId = userId;
        next();
    } catch (error) {
        throw new ApiError(`Invalid access token: ${error.message || ""}`, 401);
    }
};

export default isLoggedIn;
