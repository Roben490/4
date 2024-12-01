import axios from "axios";
import { User } from "../interface/User";

const API_URL = "http://localhost:4444/api";

interface loginDTO {
  foundUser: User,
  token: string
}


export const loginUser = async (name: string, password: string): Promise<loginDTO | null> => {
  try {
    const response = await axios.post<loginDTO>(`http://localhost:4444/api/login`, { name, password }, { withCredentials: true });
    return response.data
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
};

export const registerUser = async (name: string, password: string, email: string): Promise<User | null> => {
    try {
      const response = await axios.post<User>(`${API_URL}/register`, { name, password, email });
      return response.data;
    } catch (error) {
      console.error("Register error:", error);
      return null;
    }
  };