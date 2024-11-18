import mongoose from 'mongoose';
import { IPlayer } from '../interfaces/IPlayer';
import { Player } from '../models/Player.model';

export const getPlayerById = async (id: string): Promise<IPlayer | null> => {
  try {
    return await Player.findById(id);
  } catch (error) {
    throw new Error('Error fetching player');
  }
};

export const updatePlayerScore = async (playerId: string, score: number) => {
  try {
    const player = await Player.findById(playerId);
    if (!player) {
      throw new Error('Player not found');
    }
    player.score! += score;
    await player.save();
    return player;
  } catch (error) {
    throw new Error('Error updating player score');
  }
};

export const createNewPlayer = async (newPlayer: IPlayer): Promise<IPlayer> => {
  try {
      const nPlayer = await new Player({
        _id: new mongoose.Types.ObjectId(),
        username: newPlayer.username,
        email: newPlayer.email
        });
    await nPlayer.save();
    return nPlayer;
  } catch (error) {
    throw error;
  }
};
