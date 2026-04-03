import ApiError from "../apiError.js";
import ApiResponse from "../apiResponse.js";

const errorHander = (err, req, res, next) => {
    if (err instanceof ApiError) {
        const { message } = err;
        return ApiResponse.badRequest(res, message);
    }
    return ApiResponse.internalServerError(res, "Internal Server Error");
};

export default errorHander;
