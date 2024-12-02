import { LoginDTO } from "../interface/LoginDTO";
import axios from "axios";
import { User } from "../interface/User";


export const loginUser = async (name: string, password: string): Promise<LoginDTO | null> => {
    try {
        const response = await axios.post<LoginDTO>(`http://localhost:4444/api/login`, { name, password }, { withCredentials: true });
        return response.data
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const registerUser = async (name: string, password: string, email: string) : Promise<User | null> => {
    try {
        const response = await axios.post<User>(`http://localhost:4444/api/register`, {name, password, email});
        return response.data;
    } catch (error) {
        console.error(error);
        return null
    }
}