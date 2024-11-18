import { Router } from 'express';
import * as playerController from '../controllers/player.controller';

const router = Router();

router.get('/stats/:id', playerController.getPlayerStats);
router.post('/updateScore/:id', playerController.updatePlayerScore);
router.post('/newPlayer', playerController.createNewPlayer);

export { router };
