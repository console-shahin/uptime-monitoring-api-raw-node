/*
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: Mohammad Shahin Sarkar
 * Date: 21/02/2021
 */

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested url was not found!',
    });
};

module.exports = handler;
