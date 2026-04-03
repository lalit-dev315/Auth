import Joi from "joi";
import inputValidator from "../../utils/middlewares/inputValidator.js";

const loginSchema = Joi.object({
    identifier: Joi.string().required(),
    password: Joi.string().min(8).max(16).required(),
});

export default inputValidator(loginSchema);
