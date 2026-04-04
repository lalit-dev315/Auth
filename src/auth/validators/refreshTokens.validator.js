import Joi from "joi";
import inputValidator from "../../utils/middlewares/inputValidator.js";

const refreshTokensSchema = Joi.object({
    refreshToken: Joi.string().required(),
});

export default inputValidator(refreshTokensSchema);
