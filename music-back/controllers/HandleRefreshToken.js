import { StatusCodes } from 'http-status-codes';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import UnauthorizedError from '../error/Unauthorized.js';

export default async function handleRefreshToken(req, res) {
    const { refreshToken } = req.signedCookies;
    if (!refreshToken) {
        // throw new UnauthorizedError('Authentication Invalid');
        return res.sendStatus(StatusCodes.UNAUTHORIZED);
    }

    console.log("isTokenValid");

    const userFound = await User.findOne({
        user_refreshToken: refreshToken,
    });

    if (!userFound) {
        throw new UnauthorizedError('Authentication Invalid');
    }

    console.log("isTokenValid2");

    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || decoded.user.user_email !== userFound.user_email)
            return res.status(StatusCodes.FORBIDDEN).json({ msg: 'invalid refresh token' });

        const accessToken = jwt.sign(
            { user: decoded.user },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );
        return res.status(StatusCodes.OK).json({ user: decoded.user, accessToken });
    });

    // res.status(StatusCodes.FORBIDDEN).json({ msg: 'invalid refresh token' });
}
