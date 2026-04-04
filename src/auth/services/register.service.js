import User from "../model.js";
import ApiError from "../../utils/apiError.js";

const registerService = async (data) => {
    const { username, email, password } = data;

    let user = await User.findOne({ email });

    if (user) {
        throw new ApiError(`User with email ${email} already exists!`, 409);
    }

    user = await User.findOne({ username });

    if (user) {
        throw new ApiError(`Username ${username} not available!`, 409);
    }

    user = await User.create({
        username,
        email,
        password,
    });

    const userObj = user.toObject();
    delete userObj.password;

    return userObj;
};

export default registerService;
