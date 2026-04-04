import ApiError from "../apiError.js";
import ApiResponse from "../apiResponse.js";

const errorHander = (err, req, res, next) => {
    console.log("inside global error handler");
    if (err instanceof ApiError) {
        console.log("custom error");
        const { message, statusCode } = err;
        return ApiResponse.sendResponse(res, false, statusCode, message);
    }
    console.log("app error");
    return ApiResponse.internalServerError(
        res,
        err.message || "Internal Server Error",
    );
};

export default errorHander;
