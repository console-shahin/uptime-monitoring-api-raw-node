/*
 * Title: Data
 * Description: Handle all Data related things
 * Author: Mohammad Shahin Sarkar
 * Date: 23/02/2021
 */

// dependencies
const fs = require('fs');
const path = require('path');

// module scaffolding
const lib = {};

lib.basedir = path.join(__dirname, '../.data/');

// --------------               CRUD Operations
// write data to file
lib.create = (dir, file, data, callback) => {
    // open file for writting
    fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            // convert data to string
            const stringData = JSON.stringify(data);

            // write data to file and then close it
            fs.writeFile(fileDescriptor, stringData, (error) => {
                if (!error) {
                    fs.close(fileDescriptor, (er) => {
                        if (!er) {
                            callback(false);
                        } else {
                            console.log('Error closing the new file!');
                        }
                    });
                } else {
                    callback('Error Writting to new file');
                }
            });
        } else {
            console.log('Could not create new file, it may already exits');
        }
    });
};

// read data from file
lib.read = (dir, file, callback) => {
    fs.readFile(`${lib.basedir + dir}/${file}.json`, 'utf-8', (err, data) => {
        callback(err, data);
    });
};

// update existing file
lib.update = (dir, file, data, callback) => {
    // open file for writing
    fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            // convert data to string
            const stringData = JSON.stringify(data);

            // turncate the file
            fs.ftruncate(fileDescriptor, (err1) => {
                if (!err1) {
                    // write to the file and close it
                    fs.write(fileDescriptor, stringData, (error) => {
                        if (!error) {
                            fs.close(fileDescriptor, (err2) => {
                                if (!err2) {
                                    callback(false);
                                } else {
                                    callback('Error Closing File');
                                }
                            });
                        } else {
                            callback('Error Writing to file');
                        }
                    });
                } else {
                    callback('Error Truncating File');
                }
            });
        } else {
            console.log(err);
        }
    });
};

// delete existing file
lib.delete = (dir, file, callback) => {
    fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
        if (!err) {
            callback(false);
        } else {
            console.log('Error deleting file');
        }
    });
};

// list all the items in a directory
lib.list = (dir, callback) => {
    fs.readdir(`${lib.basedir + dir}/`, (err, fileNames) => {
        if (!err && fileNames && fileNames.length > 0) {
            const trimmedFileNames = [];
            fileNames.forEach((fileName) => {
                trimmedFileNames.push(fileName.replace('.json', ''));
            });
            callback(false, trimmedFileNames);
        } else {
            callback('Error reading directory!');
        }
    });
};

module.exports = lib;
