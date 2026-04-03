class ApiResponse {
    static sendResponse(res, success, statusCode, message, data = null) {
        return res.status(statusCode).json({
            success,
            message,
            data,
        });
    }

    static created(res, message, data = null) {
        return ApiResponse.sendResponse(res, true, 201, message, data);
    }

    static ok(res, message, data = null) {
        return ApiResponse.sendResponse(res, true, 200, message, data);
    }

    static badRequest(res, message, data = null) {
        return ApiResponse.sendResponse(res, false, 400, message, data);
    }

    static unauthorized(res, message, data = null) {
        return ApiResponse.sendResponse(res, false, 401, message, data);
    }

    static internalServerError(res, message, data = null) {
        return ApiResponse.sendResponse(res, false, 500, message, data);
    }
}

export default ApiResponse;
