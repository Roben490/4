export interface Player {
    _id?: string;
    img?: string;
    username: string;
    password: string
    email: string;
    winsImages?: string[];
    score?: number;
    lives?: number;
    isAdmin?: boolean;
    createdAt?: Date;
  }