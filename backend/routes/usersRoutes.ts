import { Router, type Request, type Response } from "express";
import {createUserController, getUserByIDController, loginUserController} from "../controllers/usersControllers.ts";

const usersRouter = Router();

usersRouter.post("/register", (req: Request, res: Response) => createUserController(req, res)) //create user
usersRouter.get("/users/:id", (req: Request, res: Response) => getUserByIDController(req, res)) //get user by id
usersRouter.post("/log-in", (req: Request, res: Response) => loginUserController(req, res))

export default usersRouter;
