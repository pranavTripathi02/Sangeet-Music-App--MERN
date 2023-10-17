import { Router } from 'express';
const router = Router();

import { login, register, logout } from '../controllers/auth.js';
// import { authoriseUser } from '../middleware/Authorization.js';

router.post('/login', login);
router.get('/logout', logout);
router.post('/register', register);

export default router;
