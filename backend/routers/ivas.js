import { Router } from "express";
import { IvaController } from "../controllers/ivas.js";

export const ivasRoute = (({ivaModel}) => {
    const ivasRouter = Router();
    const ivaController = new IvaController({ivaModel});
    ivasRouter.get('/', ivaController.getAll());
});