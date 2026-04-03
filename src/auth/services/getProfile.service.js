import User from "../model.js";

const getProfileService = async (userId) => {
    const user = await User.findOne({ _id: userId }, { _id: 0, __v: 0 });
    const userObj = user.toObject();

    delete userObj.password;
    delete userObj.refreshToken;

    return userObj;
};

export default getProfileService;
