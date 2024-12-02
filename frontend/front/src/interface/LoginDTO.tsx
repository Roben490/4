import { User } from "./User";

export interface LoginDTO {
    foundUser: User;
    token: string;
  }