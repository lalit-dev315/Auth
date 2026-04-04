import { genereateResetToken } from "../../utils/tokens.js";

const forgotPasswordService = async (email) => {
    // send email to the user
    const payload = { email };
    const { JWT_RESET_TOKEN_SECRET } = process.env;
    const resetToken = genereateResetToken(payload, JWT_RESET_TOKEN_SECRET);
    return {
        resetToken,
    };
};

export default forgotPasswordService;
