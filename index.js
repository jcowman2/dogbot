"use strict";
/**
 * AWS Lambda Function called by GroupMe API
 */
exports.handler = function(event, context, callback) {
    const responseCode = 200;
    const message = "Hello, world!";

    const responseBody = {
        message
    };

    const response = {
        statusCode: responseCode,
        body: JSON.stringify(responseBody)
    };

    callback(null, response);
}
