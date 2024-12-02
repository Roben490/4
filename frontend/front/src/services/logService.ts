import { LoginDTO } from "../interface/LoginDTO";
import axios from "axios";


export const loginUser = async (name: string, password: string): Promise<LoginDTO | null> => {
    try {
        const response = await axios.post<LoginDTO>(`http://localhost:4444/api/login`, { name, password }, { withCredentials: true });
        return response.data
    } catch (error) {
        console.error(error);
        return null;
    }
}