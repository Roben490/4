import { userRole } from "../enums/userRole";

export interface User {
    _id?: string;
    name: string;
    email: string;
    password: string;
    role: userRole;
    createdAt?: Date;
}