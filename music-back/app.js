//env variables
import 'dotenv/config'
import 'express-async-errors';
//express
import express from 'express';
const app = express();
app.use(express.json());

// const authoriseMiddleware = require('./middleware/authorisationMiddleware');
// const { authoriseUser } = require('./middleware/Authorization');

// const helmet = require('helmet');
// import corsOptions from './config/corsOptions';

//cors
import cors from 'cors'
import corsOptions from "./config/corsOptions.js";
app.use(cors(corsOptions));

// const xss = require('xss-clean');
// const fileUpload = require('express-fileupload');
// const rateLimiter = require('express-rate-limit');
// const mongoSanitize = require('express-mongo-sanitize');

// app.use(helmet());
// app.use(cors());
// app.use(xss());
// app.use(fileUpload());
// app.use(mongoSanitize());

// app.set('trust proxy', 1);
// app.use(
//   rateLimiter({
//     windowMs: 15 * 60 * 1000,
//     max: 60,
//   })
// );

//cookie-parser
import cookieParser from 'cookie-parser';
app.use(cookieParser(process.env.JWT_SECRET));

//routes
import authRouter from './routes/auth.js';
import songsRouter from './routes/songs.js';
app.use('/api/v1/auth/', authRouter);
app.use('/api/v1/songs/', songsRouter);

import userRouter from './routes/user.js';
app.use('/api/v1/user/', userRouter);
//middlewares
import ErrorHandlerMiddleware from './middleware/ErrorHandler.js';
import NotFoundMiddleware from './middleware/NotFound.js';

app.use(NotFoundMiddleware);
app.use(ErrorHandlerMiddleware);

//start
import connectDB from './db/connect.js';

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
        connectDB(process.env.MONGO_URI);
    } catch (err) {
        console.log(err);
    }
};
start();
