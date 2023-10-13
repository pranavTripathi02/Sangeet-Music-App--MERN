import express from 'express';
const router = express.Router();
import {
    getAllUsers,
    getCurrentUser,
    updatePassword,
} from '../controllers/user.js';
import {
    authoriseUser,
    authoriseRoles,
} from '../middleware/Authorization.js'

router.route('/').get(authoriseUser, authoriseRoles('admin'), getAllUsers);
router
    .route('/me')
    .get(authoriseUser, getCurrentUser)
    .patch(authoriseUser, updatePassword);

export default router;
