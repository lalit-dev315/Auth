import Joi from "joi";
import ApiError from "../../utils/apiError.js";

const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().min(3).required(),
    password: Joi.string().min(8).max(16).required(),
});

const registerValidator = (req, _, next) => {
    const { error } = registerSchema.validate(req.body);
    if (error) {
        throw new ApiError(
            `Validation failed: ${error.details[0].message}`,
            400,
        );
    }

    next();
};

export default registerValidator;
