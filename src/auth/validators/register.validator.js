import Joi from "joi";
import inputValidator from "../../utils/middlewares/inputValidator.js";

const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().min(3).required(),
    password: Joi.string().min(8).max(16).required(),
});

export default inputValidator(registerSchema);
