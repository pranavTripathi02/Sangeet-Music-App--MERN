import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

const createJWT = ({ payload }) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    return token;
};

const isTokenValid = (token) => jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
        return res.sendStatus(StatusCodes.FORBIDDEN)
    }
    return decoded;
});

const attachCookies = ({ res, user }) => {
    const accessTokenJWT = createJWT({ payload: { user } });
    const refreshTokenJWT = createJWT({ payload: { user } });

    const oneDay = 1000 * 60 * 60 * 24;

    res
        .cookie('accessToken', accessTokenJWT, {
            httpOnly: true,
            // secure: process.env.NODE_ENV === 'production',
            signed: true,
            expires: new Date(Date.now() + oneDay),
        })
        .cookie('refreshToken', refreshTokenJWT, {
            httpOnly: true,
            // secure: process.env.NODE_ENV === 'production',
            signed: true,
            expires: new Date(Date.now() + oneDay * 30),
        });
    return { refreshTokenJWT };
};

export { createJWT, attachCookies, isTokenValid };
