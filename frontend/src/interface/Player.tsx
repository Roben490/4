export interface Player {
    _id?: string;
    username: string;
    password: string
    email: string;
    score?: number;
    lives?: number;
    isAdmin?: boolean;
    createdAt?: Date;
  }