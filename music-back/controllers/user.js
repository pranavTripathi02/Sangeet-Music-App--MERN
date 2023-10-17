import { StatusCodes } from 'http-status-codes';
import User from '../models/User.js';

const getAllUsers = async (req, res) => {
    const users = await User.find({});
    const userList = users.map((user) => {
        // console.log(user);
        const {
            user_name, user_email, _id: user_id, user_roles, user_refreshToken
        } = user
        let loggedSession = false;
        if (user_refreshToken)
            loggedSession = true
        return {
            user_name, user_email, user_id, user_roles, loggedSession
        }
    });
    res.status(StatusCodes.OK).json({ userList });
};

const getCurrentUser = async (req, res) => {
    res.status(StatusCodes.OK).json({ user: req.user });
};

const updatePassword = async (req, res) => { };
// const getAllUser = async (req, res) => {};
// const getAllUser = async (req, res) => {};

export { getCurrentUser, getAllUsers, updatePassword };
