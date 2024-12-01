import { userRole } from "../enums/userRole";

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: userRole;
  createdAt?: Date;
}