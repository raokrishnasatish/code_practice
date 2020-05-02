const moment = require('moment');

// Declare middleware function logger
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    // Note: have to call next() to move to next middleware function.
    next();
};

module.exports = logger;

