import { ProductoController } from "../controllers/productos.js";
import { Router } from "express";

export const ProductoRoute = (({productoModel}) => {
    const productosRouter = Router();

    const productoController = new ProductoController({productoModel});

    productosRouter.get('/productos', productoController.getAll);

    productosRouter.get('/productos/:id', productoController.getById);

    productosRouter.get('/productosName/:nombre', productoController.getByName);

    productosRouter.post('/productos', productoController.post);

    productosRouter.put('/productos/:id', productoController.put);

    productosRouter.delete('/productos/:id', productoController.delete);

    return productosRouter;
});