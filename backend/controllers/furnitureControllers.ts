//controller is for handling the request and response logic
import { type Request, type Response } from "express";
import { getItemsInCart } from "../services/furnitureServices.ts";
import { addItemToCart } from "../services/furnitureServices.ts";
import { getItemById } from "../services/furnitureServices.ts";
import { deleteItemById } from "../services/furnitureServices.ts";

export const getCartController = async (req: Request, res: Response) => {
  const client = req.app.locals.client;
  try {
    const records = await getItemsInCart(client);
    res.status(200).json({
      success: true,
      data: records,
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


export const addToCartController = async (req: Request, res: Response) => {
  const client = req.app.locals.client;
  try {
    const response = await addItemToCart(client, req)
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


export const getItemByIdController = async (req: Request, res: Response) => {
  const client = req.app.locals.client;
  try {
    const itemId = req.params.id;
    const item = await getItemById(client, itemId);
    if (!item) {
      res.status(404).json({
        success: false,
        message: "Item not found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      data: item,
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


export const deleteItemController = async (req: Request, res: Response) => {
  const client = req.app.locals.client;
  try {
    const itemId = req.params.id;
    const deletedCount = await deleteItemById(client, itemId);
    if (deletedCount === 0) {
      res.status(404).json({
        success: false,
        message: "Item not found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Item deleted successfully",
      data: { deletedCount },
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


