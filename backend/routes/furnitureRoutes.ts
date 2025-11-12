import { Router, type Request, type Response } from "express";
import { getCartController } from "../controllers/furnitureControllers.ts";
import { addToCartController } from "../controllers/furnitureControllers.ts";
import { getItemByIdController } from "../controllers/furnitureControllers.ts";
import { deleteItemController } from "../controllers/furnitureControllers.ts";

const furnitureRouter = Router();

furnitureRouter.get("/cart", (req: Request, res: Response) => getCartController(req, res));
furnitureRouter.post("/cart", async (req: Request, res: Response) => addToCartController(req, res));
furnitureRouter.get("/cart/:id", (req: Request, res: Response) => getItemByIdController(req, res));
furnitureRouter.delete("/cart/:id", (req: Request, res: Response) => deleteItemController(req, res));
 
export default furnitureRouter;
