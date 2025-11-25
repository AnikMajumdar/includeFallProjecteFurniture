import { type Request, type Response } from "express";
import { createUser, getUserById } from "../services/usersServices.ts";
import passport from "passport";
import jwt from 'jsonwebtoken'


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

export const getUserByIDController = async (req: Request, res: Response) => {
  const client = req.app.locals.client;
  try {
    const id: string = req.params.id
    const user = await getUserById(client, id)
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(400).json({
        success: false,
        message: e.message,
      })
    } else {
      res.status(400).json({
        success: false,
        message: "cold not get error message"
      })
    }
  }
}

export const loginUserController = async (req: Request, res: Response) => {
  passport.authenticate("local", {session: false}, (err: Error, user: any) => {
    if (err || !user) {
      return res.status(400).json({
        message: "something is not right",
        user: user
      });
    }

    req.login(user, {session: false}, (err) => {
          if (err) {
            res.send(err);
          }

          const token = jwt.sign({sub: user._id.toString()}, "jwt_secret")
          const return_user = {
            username: user.username,
            user_id: user._id,
          }
          return res.json({user: return_user, token});
    });
  }) (req, res)
}