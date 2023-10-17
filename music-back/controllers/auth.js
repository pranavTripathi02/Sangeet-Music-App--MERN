// import Token from '../models/Token.js';
import User from '../models/User.js';
import { BadRequestError, UnauthorizedError } from '../error/index.js';
import crypto from 'crypto';
import { StatusCodes } from 'http-status-codes';
import createTokenUser from '../utils/createToken.js';
import { attachCookies } from '../utils/jwt.js';
import bcrypt from 'bcryptjs'

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new BadRequestError('Please provide both email and password');
    }

    // console.log("email, pass: ", email, password);

    const user = await User.findOne({ user_email: email });
    if (!user) {
        throw new BadRequestError('User does not exist');
    }

    const isCorrect = await user.comparePassword(password);
    if (!isCorrect) {
        throw new UnauthorizedError('Incorrect Password. Try again.');
    }

    const tokenUser = createTokenUser(user);

    // let refreshToken = crypto.randomBytes(12).toString('hex');
    // const tokenExists = await Token.findOne({ user: user._id });
    // if (tokenExists) {
    //     const { isValid } = tokenExists;
    //     if (!isValid) {
    //         throw new UnauthorizedError('Invalid Credentials');
    //     }
    //     refreshToken = tokenExists.refreshToken;
    //     attachCookies({ res, user: tokenUser, refreshToken });
    //     res.status(StatusCodes.OK).json({ user: tokenUser });
    //     return;
    // }
    const refreshToken = crypto.randomBytes(20).toString('hex');

    // const userAgent = req.headers['user-agent'];
    // const ip = req.ip;

    // const userToken = { refreshToken, ip, userAgent, user: tokenUser };
    // const tokenCreated = await Token.create(userToken);
    const { accessTokenJWT, refreshTokenJWT } = attachCookies({
        res,
        user: tokenUser,
        refreshToken
    });
    user.user_refreshToken = refreshTokenJWT;
    await user.save();

    res.status(StatusCodes.OK).json({ accessToken: accessTokenJWT, user: tokenUser });
};

const logout = async (req, res) => {
    // console.log("logging out user");
    const { refreshToken } = req.signedCookies;

    res.cookie('accessToken', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now()),
    });
    res.cookie('refreshToken', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now()),
    });

    const foundUser = await User.findOne({ user_refreshToken: refreshToken });
    if (!foundUser) {
        res.clearCookie('refreshToken', { httpOnly: true, secure: true });
        return res.sendStatus(StatusCodes.OK);
    }
    foundUser.user_refreshToken = '';
    await foundUser.save();

    res.status(StatusCodes.OK).json({ msg: 'User logged out' });
};

const register = async (req, res) => {
    const { name, email, password } = req.body;
    const emailExists = await User.findOne({ user_email: email });
    if (emailExists) {
        throw new BadRequestError('Email already registered');
    }
    const isFirstAccount = (await User.countDocuments({})) === 0;
    let roles = {};
    if (req.body.roles) {
        roles = req.body.roles;
    }
    if (isFirstAccount) {
        roles = { Admin: 'admin', ...roles };
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);
        const user = await User.create({
            user_name: name,
            user_email: email,
            user_password: hashedPass,
            user_roles: roles,
        });
        res.status(StatusCodes.CREATED).
            json({
                msg: `Thank you for registering ${user.name}`
            });
    } catch (err) {
        console.error("Error while registering: ", err);
        res
            .status(StatusCodes.BAD_REQUEST)
            .json({ msg: `An error occured. Please try again.` });
    }
};

export { login, register, logout };
