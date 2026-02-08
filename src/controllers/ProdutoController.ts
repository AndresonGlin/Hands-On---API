import type { Request, Response } from "express";
import type ProdutoService from "../services/ProdutoService.js";

export default class ProdutoController {
    private produtoService: ProdutoService;

    constructor(produtoService: ProdutoService) {
        this.produtoService = produtoService;
    }

    public async getAll(req: Request, res: Response) {
        const produtos = await this.produtoService.getAllProdutos();
        res.status(200).json(produtos);
    }

    public async getById(req: Request, res: Response) {
        const { id } = req.params;
        const produto = await this.produtoService.getProdutoById(id as string);
        res.status(200).json(produto);
    }

    public async add(req: Request, res: Response) {
        const body = req.body;
        const produto = await this.produtoService.addProduto(body);
        res.status(201).json(produto);
    }

    public async update(req: Request, res: Response) {
        const { id } = req.params;
        const body = req.body;
        const produto = await this.produtoService.updateProduto(id as string, body);
        res.status(200).json(produto);
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        await this.produtoService.deleteProduto(id as string);
        res.status(204).json({ status: "Categoria deletada" })
    }
}