import express from 'express';
const router = express.Router();
import {
    getAllUsers,
    getCurrentUser,
    updatePassword,
} from '../controllers/user.js';
import {
    authoriseUser,
    // authoriseRoles,
} from '../middleware/Authorization.js'
import handleRefreshToken from '../controllers/HandleRefreshToken.js';

router.route('/').get(authoriseUser, getAllUsers);
router
    .route('/me')
    .get(authoriseUser, getCurrentUser)
    .patch(authoriseUser, updatePassword);
router.route('/refresh').get(handleRefreshToken);

export default router;
