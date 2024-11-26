import { CookieOptions, Request, Response } from "express";
import { handleBadRequest, handleError } from "../utils/errorHandlar";
import { loginService, logoutService } from "../services/auth.service";
import { log } from "console";


export const login = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const RealUser = await loginService(user, res);
    res.json(RealUser);
  } catch (error: any) {    
    console.error(error.message);
    handleError(res, error.status, error.message);
  }
}

export const logout = async (req: Request, res: Response) => {
  try {
    await logoutService(req, res);
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error: any) {
    console.error(error.message);
  }
};