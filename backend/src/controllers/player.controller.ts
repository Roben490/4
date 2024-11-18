import { Request, Response } from 'express';
import * as playerService from '../services/player.service';
import { IPlayer } from '../interfaces/IPlayer';

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
  const { id } = req.params;
  try {
    const updatedPlayer = await playerService.updatePlayerScore(id, score);
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
  console.log(playerFromBody);
  
  try {
    const newPlayer = await playerService.createNewPlayer(playerFromBody);
    res.status(201).json(newPlayer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};
