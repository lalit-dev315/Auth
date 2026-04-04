import User from "../model.js";
import { defaultExcludeFieldsFromDB } from "../../utils/constants.js";

const getProfileService = async (userId) => {
    const user = await User.findOne(
        { _id: userId },
        defaultExcludeFieldsFromDB,
    );
    const userObj = user.toObject();

    delete userObj.password;
    delete userObj.refreshToken;

    return userObj;
};

export default getProfileService;
