import axios from "axios";
import { Player } from "../interface/Player";

const API_URL = "http://localhost:3000/api/";

export const loginUser = async (username: string, password: string): Promise<Player | null> => {
  try {
    const response = await axios.post<Player>(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
};

export const registerUser = async (username: string, password: string, email: string): Promise<Player | null> => {
    try {
      const response = await axios.post<Player>(`${API_URL}/register`, { username, password, email });
      return response.data;
    } catch (error) {
      console.error("Register error:", error);
      return null;
    }
  };