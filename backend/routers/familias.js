import { FamiliaController } from "../controllers/familias.js";
import { Router } from "express";

export const FamiliaRoute = (({familiaModel}) => {
    const familiasRouter = Router();

    const familiaController = new FamiliaController({familiaModel});

    familiasRouter.get('/familias', familiaController.getAll);

    familiasRouter.get('/familias/:id', familiaController.getById);

    familiasRouter.get('/familiasName/:nombre', familiaController.getByName);

    familiasRouter.post('/familias', familiaController.post);

    familiasRouter.put('/familias/:id', familiaController.put);

    familiasRouter.delete('/familias/:id', familiaController.delete);

    return familiasRouter;
});