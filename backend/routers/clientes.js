import { ClienteController } from "../controllers/clientes.js";
import { Router } from "express";

export const ClienteRoute = (({clienteModel}) => {
    const clientesRouter = Router();

    const clienteController = new ClienteController({clienteModel});

    clientesRouter.get('/clientes', clienteController.getAll);

    clientesRouter.get('/clientes/:id', clienteController.getById);

    clientesRouter.get('/clientesName/:nombreApellidos', clienteController.getByName);

    clientesRouter.get('/clientesNif/:nif', clienteController.getByNif);

    clientesRouter.post('/clientes', clienteController.post);

    clientesRouter.put('/clientes/:id', clienteController.put);

    clientesRouter.delete('/clientes/:id', clienteController.delete);

    return clientesRouter;
});