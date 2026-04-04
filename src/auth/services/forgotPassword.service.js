import jwt from "jsonwebtoken";

const forgotPasswordService = async (email) => {
    // send email to the user
    const payload = { email };
    const { JWT_RESET_TOKEN_SECRET } = process.env;
    const resetToken = genereateResetToken(payload, JWT_RESET_TOKEN_SECRET);
    return {
        resetToken,
    };
};

const genereateResetToken = (payload, secret) => {
    const resetToken = jwt.sign(payload, secret, { expiresIn: "2m" });
    return resetToken;
};

export default forgotPasswordService;
