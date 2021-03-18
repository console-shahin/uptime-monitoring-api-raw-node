/*
 * Title: Environment
 * Description: Handle all environment related things
 * Author: Mohammad Shahin Sarkar
 * Date: 23/02/2021
 */

const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'fs3sf$fa5aa$g&f4#4gasspin0sfs#fa&fat%wsGr4qk5%e24a4fa2e3',
    maxChecks: 5,
    twilio: {
        fromPhone: '+15162615371',
        accountSid: 'AC4773684212fdb84f83f88d4a92b6254f',
        authToken: '16a434ff61f50303bfb03a05cbd5fc73',
    }
};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'fs3sf$fa5aa$g&a1fa292fa-spin0sjf#fa&fae24a4fa2e30gae434ta##a45ag8gaf',
    maxChecks: 5,
    twilio: {
        fromPhone: '+15162615371',
        accountSid: 'AC4773684212fdb84f83f88d4a92b6254f',
        authToken: '16a434ff61f50303bfb03a05cbd5fc73',
    },
};

// determine which environment was passed
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environmet object
const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// export module
module.exports = environmentToExport;
