import { type Request, type Response } from "express";
import { createUser } from "../services/usersServices.ts";


export const createUserController = async (req: Request, res: Response) => {
  const client = req.app.locals.client;
  try {
    const username: string = req.body.username;
    const password: string = req.body.password
    const response = await createUser(client, username, password)
    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(400).json({
        success: false,
        message: e.message,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "could not get error message",
      });
    }
  }
};