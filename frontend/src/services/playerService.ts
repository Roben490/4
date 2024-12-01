import axios from "axios";
import { User } from "../interface/User";

const API_URL = "http://localhost:3000/api";

export const updateUserScore = async (score: number): Promise<User | null> => {
  try {
    const response = await axios.post<User>(
      `${API_URL}/updateScore`,
      { score },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to update score:", error);
    return null;
  }
};

