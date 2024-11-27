import { Player } from "../models/Player.model";
import { CookieOptions, Request, Response } from "express";
import { comparePassword } from "../utils/comparePassword";
import { generateAuthToken } from "../utils/jwt";
import { handleBadRequest } from "../utils/errorHandlar";
import { IPlayer } from "../interfaces/IPlayer";

interface PlayerDTO {
  username: string;
  password: string;
}

const cookieConfig: CookieOptions = {
  httpOnly: true, // הגנה מפני XSS - הקוקי לא נגיש דרך JavaScript בצד הלקוח
  secure: true, // שליחת הקוקי רק בחיבור HTTPS
  sameSite: "strict", // הגנה מפני CSRF
};

export const loginService = async (player: PlayerDTO, res: Response): Promise<IPlayer> => {
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
    return foundPlayer;
  } catch (error: any) {
    error.status = 404;
    return handleBadRequest("MongoDB", error);
  }
};

export const logoutService = async (req: Request, res: Response) => {
    try {
        res.clearCookie("token", {
          httpOnly: true,
          secure: true,
          sameSite: "strict",
        });
      } catch (error) {
        console.log(error);
      }
};
