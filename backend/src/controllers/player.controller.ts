import { Request, Response } from 'express';
import * as playerService from '../services/player.service';
import { IPlayer } from '../interfaces/IPlayer';
import jwt from 'jsonwebtoken';
interface TokenPayload {
  id: string;
  isAdmin: boolean;
}

export const getPlayerStats = async (req: Request, res: Response): Promise<void> => {
  try {
    const player = await playerService.getPlayerById(req.params.id);
    if (!player) {
      res.status(404).json({ msg: 'Player not found' });
      return;
    }
    res.json(player);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

export const updatePlayerScore = async (req: Request, res: Response): Promise<void> => {
  const { score } = req.body;
  if (!req.headers.cookie) {
    res.status(404).json({ msg: 'Player not found' });
    return;
  }
  try {
    const token = req.cookies['token']
    const SECRET_KEY = process.env.JWT_SECRET as string;
    const player = jwt.verify(token, SECRET_KEY,  {
      algorithms: ['HS256']
    }) as TokenPayload;
    console.log(player);
    console.log(token);
    const updatedPlayer = await playerService.updatePlayerScore(player.id, score);
    if (!updatedPlayer) {
        res.status(404).json({ msg: 'Player not found' });
        return;
    }
    res.json({ msg: 'Player score updated', updatedPlayer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

export const createNewPlayer = async (req: Request, res: Response): Promise<void> => {
  const playerFromBody: IPlayer = req.body;    
  try {
    const newPlayer = await playerService.createNewPlayer(playerFromBody);
    res.status(201).json(newPlayer);
  } catch (error) {
    res.status(500).json(error);
  }
};
