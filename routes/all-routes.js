import express from 'express';

// middleware imports
import {userSyncMiddleware} from '../middleware/user-sync-middleware.js'

// route imports
import userRoutes from './user-routes.js';
import syncRoutes from './sync-routes.js';

// Main Code
const router = express.Router();

router.use('/sync', userSyncMiddleware, syncRoutes);
router.use('/users', userRoutes);

export default router;