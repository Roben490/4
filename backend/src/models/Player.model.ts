import { Schema, model, Document } from 'mongoose';
import { IPlayer } from '../interfaces/IPlayer';


const playerSchema = new Schema<IPlayer>({
  _id: { type: Schema.Types.ObjectId },
  img: { type: String, default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'},
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  winsImages: { type: [String], default: []},
  score: { type: Number, default: 0 },
  lives: { type: Number, default: 3 },
  isAdmin: { type: Boolean, default: false},
  createdAt: { type: Date, default: Date.now },
});

const Player = model<IPlayer>('Players', playerSchema);

export { Player };
