import { Router, type Request, type Response } from "express";
import {createUserController, getUserByIDController} from "../controllers/usersControllers.ts";

const usersRouter = Router();

usersRouter.post("/register", (req: Request, res: Response) => createUserController(req, res)) //create user
usersRouter.get("/users/:id", (req: Request, res: Response) => getUserByIDController(req, res)) //get user by id

export default usersRouter;
