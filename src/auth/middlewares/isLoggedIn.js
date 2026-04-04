import ApiError from "../../utils/apiError.js";
import jwt from "jsonwebtoken";
import cache from "../../utils/cache.js";

const { JWT_ACCESS_TOKEN_SECRET } = process.env;

const isLoggedIn = async (req, _, next) => {
    const authorization = req.headers["authorization"];
    const accessToken = authorization.split(" ")[1];

    if (!accessToken) {
        throw new ApiError(`Missing Access token`, 401);
    }

    try {
        const decoded = jwt.verify(accessToken, JWT_ACCESS_TOKEN_SECRET);
        const { userId } = decoded;
        const cacheKey = `${userId}`;
        if (!cache.get(cacheKey)) {
            throw new ApiError(`Invalid session`, 401);
        }
        req.userId = userId;
        next();
    } catch (error) {
        throw new ApiError(`${error.message || "Invalid access token"}`, 401);
    }
};

export default isLoggedIn;
