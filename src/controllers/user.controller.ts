import { Request, Response } from "express";
import UserService from "../services/user/user.service";

export default class UserController {
  constructor(
    private readonly userService: UserService
  ){}

  createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      const user = await this.userService.createUser(req.body);
      return res.status(201).json(user);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  loginUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      const user = await this.userService.loginUser(req.body);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}