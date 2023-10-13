// const allowedOrigins = require('./allowedOrigins');
import allowedOrigins from './allowedOrigins.js';

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            // console.log(origin, 'hi');
            callback(null, true);
        } else {
            // console.log(origin, 'h9');
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    optionSuccessStatus: 200,
};

export default corsOptions;
