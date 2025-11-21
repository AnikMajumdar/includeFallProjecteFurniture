import { Router, type Request, type Response } from "express";
import {createUserController} from "../controllers/usersControllers.ts";

const usersRouter = Router();

usersRouter.post("/register", (req: Request, res: Response) => createUserController(req, res)) //create user


export default usersRouter;
