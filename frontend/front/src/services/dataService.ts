import axios from "axios"
interface UserUpdateDTO {
    name: string,
    email: string,
    role: string
  }

export const editDriver = async (driverId: string, newDriver: UserUpdateDTO): Promise<boolean> => {
    console.log(driverId, newDriver);
    
    const response = await axios.put(`http://localhost:4444/api/updateUser/${driverId}`, { newDriver }, { withCredentials: true})
    console.log(response);
    
    if (response.data) {
        return true;
    };
    return false
}