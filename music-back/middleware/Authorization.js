// const { StatusCodes } = require('http-status-codes');
// const jwt = require('jsonwebtoken');
import { UnauthorizedError } from '../error/index.js';
import User from '../models/User.js';
import { isTokenValid, attachCookies } from '../utils/jwt.js';

const authoriseUser = async (req, res, next) => {
    const { refreshToken, accessToken } = req.signedCookies;
    // console.log("here, aT", refreshToken, accessToken)

    try {
        if (accessToken) {
            const payload = isTokenValid(accessToken);
            req.user = payload.user;
            return next();
        }
        const payload = isTokenValid(refreshToken);
        console.log("isTokenValid", payload);
        const refreshCheck = await User.findOne({
            user_refreshToken: payload.refreshToken,
        });
        if (!refreshCheck) {
            throw new UnauthorizedError('Authentication Invalid');
        }
        attachCookies({
            res,
            user: payload.user,
        });

        req.user = payload.user;

        next();
    } catch (error) {
        throw new UnauthorizedError('Authentication Invalid');
    }
};

const authoriseRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new UnauthorizedError('Not authorized to access');
        }
        next();
    };
};

export { authoriseUser, authoriseRoles };
