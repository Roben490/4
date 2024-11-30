import axios from "axios";
import { Player } from "../interface/Player";

const API_URL = "http://localhost:3000/api";

export const updatePlayerScore = async (score: number): Promise<Player | null> => {
  try {
    const response = await axios.post<Player>(
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

