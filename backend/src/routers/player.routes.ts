import { NextFunction, Router } from 'express';
import * as playerController from '../controllers/player.controller';
import * as authController from '../controllers/auth.controller';
import { verify } from 'crypto';
import { verifyUser } from '../utils/jwt';

const router = Router();

router.get('/stats/:id', playerController.getPlayerStats);
router.post('/updateScore', verifyUser as NextFunction, playerController.updatePlayerScore);
router.post('/newPlayer', playerController.createNewPlayer);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

export { router };
