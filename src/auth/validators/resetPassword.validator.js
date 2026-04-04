import Joi from "joi";
import inputValidator from "../../utils/middlewares/inputValidator.js";

const resetPasswordSchema = Joi.object({
    token: Joi.string().required(),
    password: Joi.string().min(8).max(16).required(),
});

export default inputValidator(resetPasswordSchema);
