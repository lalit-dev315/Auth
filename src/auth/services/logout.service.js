import User from "../model.js";
import cache from "../../utils/cache.js";

const logoutService = async (userId) => {
    const user = await User.findOne({ _id: userId });
    user.refreshToken = null;

    // delete the session
    const cacheKey = `${userId}`;
    cache.del(cacheKey);

    user.save();
};

export default logoutService;
