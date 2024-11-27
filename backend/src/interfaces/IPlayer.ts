import { Schema } from "mongoose";

export interface IPlayer extends Document {
    _id?: Schema.Types.ObjectId;
    img?: string;
    username: string;
    password: string;
    email: string;
    winsImages?: string[];
    score?: number;
    lives?: number;
    isAdmin: boolean;
    createdAt?: Date;
  }