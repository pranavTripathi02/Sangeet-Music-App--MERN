import { StatusCodes } from 'http-status-codes';
import User from '../models/User.js';

const getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.status(StatusCodes.OK).json({ users });
};

const getCurrentUser = async (req, res) => {
    res.status(StatusCodes.OK).json({ user: req.user });
};

const updatePassword = async (req, res) => { };
// const getAllUser = async (req, res) => {};
// const getAllUser = async (req, res) => {};

export { getCurrentUser, getAllUsers, updatePassword };
