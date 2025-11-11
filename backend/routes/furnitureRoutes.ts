import { Router, type Request, type Response } from "express";
import { getCartController } from "../controllers/furnitureControllers.ts";
import { addToCartController } from "../controllers/furnitureControllers.ts";

const furnitureRouter = Router();

furnitureRouter.get("/cart", (req: Request, res: Response) => getCartController(req, res));
furnitureRouter.post("/cart", async (req: Request, res: Response) => addToCartController(req, res));   
 
export default furnitureRouter;
