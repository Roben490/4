import axios from "axios"
import { User } from "../interface/User";


export const editDriver = async (newDriver: Partial<User>): Promise<boolean> => {
    console.log(newDriver);
    const response = await axios.put(`http://localhost:4444/api/updateUser`, { newDriver }, { withCredentials: true})
    console.log(response);
    
    if (response.data) {
        return true;
    };
    return false
}


export const deleteDriver = async (driverId: string) => {
    try {
        const response = await axios.delete(`http://localhost:4444/api/deleteRoute/${driverId}`, { withCredentials: true});        
        return response.data;
    } catch (error) {
        console.error(error);
        return null
    }
}