import jwt from "jsonwebtoken";

const generateAccessToken = (payload, secret) => {
    const accessToken = jwt.sign(payload, secret, { expiresIn: "2m" });
    return accessToken;
};

const generateRefreshToken = (payload, secret) => {
    const refreshToken = jwt.sign(payload, secret, { expiresIn: "7d" });
    return refreshToken;
};

const genereateResetToken = (payload, secret) => {
    const resetToken = jwt.sign(payload, secret, { expiresIn: "2m" });
    return resetToken;
};

export { generateAccessToken, generateRefreshToken, genereateResetToken };
