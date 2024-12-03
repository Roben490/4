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
