import { Schema } from "mongoose";

export interface IPlayer extends Document {
    _id?: Schema.Types.ObjectId;
    username: string;
    password: string;
    email: string;
    score?: number;
    lives?: number;
    createdAt?: Date;
  }