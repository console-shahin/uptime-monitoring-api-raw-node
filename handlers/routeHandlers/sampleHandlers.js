/*
 * Title:
 * Description:
 * Author: Mohammad Shahin Sarkar
 * Date: 21/02/2021
 */

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        message: 'This is a sample url',
    });
};

module.exports = handler;
