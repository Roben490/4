import axios from "axios";
import { User } from "../interface/User";

const API_URL = "http://localhost:3000/api/";

export const loginUser = async (username: string, password: string): Promise<User | null> => {
  try {
    const response = await axios.post<User>(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
};

export const registerUser = async (username: string, password: string, email: string): Promise<User | null> => {
    try {
      const response = await axios.post<User>(`${API_URL}/register`, { username, password, email });
      return response.data;
    } catch (error) {
      console.error("Register error:", error);
      return null;
    }
  };