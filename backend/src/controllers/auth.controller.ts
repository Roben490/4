import { CookieOptions, Request, Response } from "express";
import { handleBadRequest, handleError } from "../utils/errorHandlar";
import { loginService, logoutService } from "../services/auth.service";


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


export const logout = async (res: Response) => {
  try {
    logoutService(res);
    res.status(200)
  } catch (error: any) {
    console.error(error.message);
  }
};