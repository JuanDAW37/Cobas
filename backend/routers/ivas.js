import { Router } from "express";
import { IvaController } from "../controllers/ivas.js";

export const IvaRoute = (({ivaModel}) => {
    const ivasRouter = Router();

    const ivaController = new IvaController({ivaModel});

    ivasRouter.get('/iva', ivaController.getAll);

    ivasRouter.get('/iva/:id', ivaController.getById);

    ivasRouter.post('/iva', ivaController.post);

    ivasRouter.put('/iva/:id', ivaController.put);

    ivasRouter.delete('/iva/:id', ivaController.delete);

    return ivasRouter;
});