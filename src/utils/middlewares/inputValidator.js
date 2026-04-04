import ApiError from "../apiError.js";

const inputValidator = (schema) => {
    return (req, _, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            throw new ApiError(
                `Validation failed: ${error.details[0].message}`,
                400,
            );
        }

        next();
    };
};

export default inputValidator;
