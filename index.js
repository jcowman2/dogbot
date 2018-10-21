"use strict";
/**
 * AWS Lambda Function called by GroupMe API
 */

const https = require("https");

exports.handler = function(event, context, callback) {
    console.log(`Received Event.`);
    
    const responseCode = 200;
    
    const reqOptions = {
        host: "swapi.co",
        path: "/api/people/1",
        method: "GET"
    }
    
    const reqGet = https.request(reqOptions, (res) => {
        const message = JSON.stringify(res);
        
        const responseBody = {
            message
        };

        const response = {
            statusCode: responseCode,
            body: JSON.stringify(responseBody)
        };
        
        callback(null, response);
    }).on("error", (e) => {
        callback(new Error("An error occurred."))
    })
}

