import { Schema, model, Document } from 'mongoose';
import { IPlayer } from '../interfaces/IPlayer';


const playerSchema = new Schema<IPlayer>({
  _id: { type: Schema.Types.ObjectId },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  score: { type: Number, default: 0 },
  lives: { type: Number, default: 3 },
  createdAt: { type: Date, default: Date.now },
});

const Player = model<IPlayer>('Players', playerSchema);

export { Player };
