import { Router } from "express";
import ProdutoService from "../services/ProdutoService.js";
import ProdutoController from "../controllers/ProdutoController.js";
import { validarBody } from "../middlewares/validarBody.js";
import { produtoSchema } from "../validates/createProdutoSchema.js";

const produtoRouter = Router();
const produtoService = new ProdutoService();
const produtoController = new ProdutoController(produtoService);

produtoRouter.get('/produtos', (req, res) => produtoController.getAll(req, res));
produtoRouter.get('/produtos/:id', (req, res) => produtoController.getById(req, res));
produtoRouter.post('/produtos', validarBody(produtoSchema), (req, res) => produtoController.add(req, res));
produtoRouter.put('/produtos/:id', (req, res) => produtoController.update(req, res));
produtoRouter.delete('/produtos/:id', (req, res) => produtoController.delete(req, res));

export default produtoRouter;