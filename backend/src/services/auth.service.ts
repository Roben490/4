import { Player } from "../models/Player.model";
import { CookieOptions, Response } from "express";
import { comparePassword } from "../utils/comparePassword";
import { generateAuthToken } from "../utils/jwt";
import { handleBadRequest } from "../utils/errorHandlar";

interface PlayerDTO {
  username: string;
  password: string;
}

const cookieConfig: CookieOptions = {
  httpOnly: true, // הגנה מפני XSS - הקוקי לא נגיש דרך JavaScript בצד הלקוח
  secure: true, // שליחת הקוקי רק בחיבור HTTPS
  sameSite: "strict", // הגנה מפני CSRF
};

export const loginService = async (player: PlayerDTO, res: Response): Promise<object> => {
  try {
    if (!player?.username || !player?.password) {
      throw new Error("Missing required fields");
    }

    const foundPlayer = await Player.findOne({ username: player.username });
    if (!foundPlayer) {
      throw new Error("Could not find this user in the database");
    }

    const isPasswordCorrect = await comparePassword(
      player.password,
      foundPlayer.password
    );
    if (!isPasswordCorrect) {
      throw new Error("Incorrect password or Email");
    }

    const { _id, isAdmin } = foundPlayer;
    let token = generateAuthToken({ _id, isAdmin });
    if (!cookieConfig) {
      throw new Error("Cookie configuration is missing");
    }

    res.cookie("token", token, cookieConfig);
    return { player, token };
  } catch (error: any) {
    error.status = 404;
    return handleBadRequest("MongoDB", error);
  }
};

export const logoutService = (res: Response) => {
    try {
        res.clearCookie("token", cookieConfig);
        console.log('User logged out and cookie cleared');
    } catch (error: any) {
        handleBadRequest("Logout Error", error);
    }
};
