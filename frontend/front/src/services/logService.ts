import { LoginDTO } from "../interface/LoginDTO";
import axios from "axios";
import { User } from "../interface/User";
import { Bus } from "../interface/Bus";
import { Lines } from "../interface/Lines";


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

export const addBus = async (bus: Partial<Bus>) : Promise<Bus | null> => {
    try {
        const response = await axios.post<Bus>(`http://localhost:4444/api/addNewBus`, bus, { withCredentials: true});        
        return response.data;
    } catch (error) {
        console.error(error);
        return null
    }
}

export const addLines = async (Line: Partial<Lines>) : Promise<Lines | null> => {
    try {
        console.log(Line);
        
        const response = await axios.post<Lines>(`http://localhost:4444/api/addNewRoute`, Line, { withCredentials: true});        
        return response.data;
    } catch (error) {
        console.error(error);
        return null
    }
}