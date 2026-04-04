import Joi from "joi";
import inputValidator from "../../utils/middlewares/inputValidator.js";

const forgotPassowrdSchema = Joi.object({
    email: Joi.string().email().required(),
});

export default inputValidator(forgotPassowrdSchema);
