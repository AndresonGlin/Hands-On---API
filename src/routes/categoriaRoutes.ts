import { Router } from "express";
import CategoriaService from "../services/CategoriaService.js";
import CategoriaController from "../controllers/CategoriaController.js";
import { validarBody } from "../middlewares/validarBody.js";
import { categoriaSchema } from "../validates/createCategoriaSchema.js";

const categoriaRouter = Router();
const categoriaService = new CategoriaService;
const categoriaController = new CategoriaController(categoriaService);

categoriaRouter.get('/categorias', (req, res) => categoriaController.getAllCategorias(req, res));
categoriaRouter.get('/categorias/:id', (req, res) => categoriaController.getById(req, res));
categoriaRouter.post('/categorias',validarBody(categoriaSchema),  (req, res) => categoriaController.addCategoria(req, res));
categoriaRouter.put('/categorias/:id', (req, res) => categoriaController.updateCategoria(req, res));
categoriaRouter.delete('/categorias/:id', (req, res) => categoriaController.deleteCategoria(req, res));

export default categoriaRouter;