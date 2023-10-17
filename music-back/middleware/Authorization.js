// const { StatusCodes } = require('http-status-codes');
import { CustomApiError, UnauthorizedError } from '../error/index.js';
// import User from '../models/User.js';
import { isTokenValid } from '../utils/jwt.js';
// import 'dotenv/config';

const authoriseUser = async (req, res, next) => {
    // console.log("here, authoriseUser")
    const authHeader = req.headers.authorization;

    // console.log("req.user", req);
    // console.log("req.user", req.user);
    // console.log("req.headers", req.headers);

    if (!authHeader || !authHeader?.startsWith("Bearer "))
        throw new CustomApiError("Missing token", 401);


    try {
        const token = authHeader.split(' ')[1];
        const decodedAccess = isTokenValid(token);
        // req.user = payload.user;
        if (decodedAccess)
            return next();

    } catch (error) {
        throw new UnauthorizedError('Authentication Invalid');
    }
};

const authoriseRoles = ({ role }) => {
    return (req, res, next) => {
        // console.log("here,", role);
        console.log(req?.user?.user_roles)
        // console.log(req);
        if (!req.user?.user_roles?.includes(role)) {
            throw new UnauthorizedError('Not authorized to access');
        }
        next();
    };
};

export { authoriseUser, authoriseRoles };
