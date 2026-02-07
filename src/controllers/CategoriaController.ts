import type { Request, Response } from "express";
import type CategoriaService from "../services/CategoriaService.js";


export default class CategoriaController {

    private categoriaService: CategoriaService;

    constructor(categoriaService:  CategoriaService) {
        this.categoriaService = categoriaService;
    }

    public async getAllCategorias(req: Request, res: Response) {

        const categorias = await this.categoriaService.getAllCategorias();
        res.status(200).json(categorias);

    }

    public async addCategoria(req: Request, res: Response) {

            const body = req.body;
            const categoria = await this.categoriaService.addCategoria(body);
            res.status(201).json(categoria);

    }

    public async updateCategoria(req: Request, res: Response) {
            const { id } = req.params;
            const body = req.body;
            const categoria = await this.categoriaService.updateCategoria(id as string, body);
            res.status(200).json(categoria);
    }

    public async deleteCategoria(req: Request, res: Response) {
            const { id } = req.params;
            await this.categoriaService.deleteCategoria(id as string);
            res.status(204).json({ status: "Categoria deletada" })
    }

}
