import ApiError from "../apiError.js";
import ApiResponse from "../apiResponse.js";

const errorHander = (err, req, res, next) => {
    if (err instanceof ApiError) {
        const { message, statusCode } = err;
        return ApiResponse.sendResponse(res, false, statusCode, message);
    }
    return ApiResponse.internalServerError(
        res,
        err.message || "Internal Server Error",
    );
};

export default errorHander;
