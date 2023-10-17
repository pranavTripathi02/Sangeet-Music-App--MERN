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

// const attachCookies = ({ res, user, refreshToken }) => {
//     const accessTokenJWT = createJWT({ payload: { user } });
//     const refreshTokenJWT = createJWT({ payload: { user, refreshToken } });
//
//     const oneDay = 1000 * 60 * 60 * 24;
//
//     res
//         .cookie('accessToken', accessTokenJWT, {
//             httpOnly: true,
//             // secure: process.env.NODE_ENV === 'production',
//             signed: true,
//             expires: new Date(Date.now() + oneDay),
//         })
//         .cookie('refreshToken', refreshTokenJWT, {
//             httpOnly: true,
//             // secure: process.env.NODE_ENV === 'production',
//             signed: true,
//             expires: new Date(Date.now() + oneDay * 30),
//         });
//
//     return { accessTokenJWT, refreshTokenJWT };
// };

const attachCookies = ({ res, user, refreshToken }) => {
    const accessTokenJWT = createJWT({ payload: { user } });
    // //console.log(accessTokenJWT);
    const refreshTokenJWT = createJWT({ payload: { user, refreshToken } });
    const day = 1000 * 60 * 60 * 24;

    // console.log("attach cookies");

    res
        .cookie('accessToken', accessTokenJWT, {
            httpOnly: true,
            signed: true,
            expires: new Date(Date.now() + 1 * day),
        })
        .cookie('refreshToken', refreshTokenJWT, {
            httpOnly: true,
            signed: true,
            expires: new Date(Date.now() + 30 * day),
        });
    return { accessTokenJWT, refreshTokenJWT };
};


export { attachCookies, isTokenValid };
