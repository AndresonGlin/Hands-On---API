import { AppError } from '../errors/AppError.js';
import { appDataSource } from "../database/appDataSource.js";
import { Produto } from "../entities/Produto.js";
import { Categoria } from "../entities/Categoria.js";

class ProdutoService {
    private produtoRepository = appDataSource.getRepository(Produto);
    private categoriaRepository = appDataSource.getRepository(Categoria);

    
    public async getAllProdutos(): Promise<Produto[]> {        
        return await this.produtoRepository.find({ relations: ["categoria"] });
    }


    public async getProdutoById(id: string): Promise<Produto> {
        const produto = await this.produtoRepository.findOne({ 
            where: { id },
            relations: ["categoria"] 
        });

        if (!produto) {
            throw new AppError(404, "Produto não encontrado!");
        }

        return produto;
    }
    

    public async addProduto(body: any): Promise<Produto> {
        const { nome, descricao, preco, estoque, categoriaId } = body;
        
        const categoria = await this.categoriaRepository.findOneBy({ id: categoriaId });
        if (!categoria) {
            throw new AppError(400, "Categoria informada não existe!");
        }
       
        const novoProduto = this.produtoRepository.create({
            nome,
            descricao,
            preco,
            estoque,
            categoria
        });

        return await this.produtoRepository.save(novoProduto);
    }

    
    public async updateProduto(id: string, body: any): Promise<Produto> {
        const { categoriaId, ...rest } = body;
        
        const produtoExiste = await this.produtoRepository.findOneBy({ id });
        if (!produtoExiste) {
            throw new AppError(400, "Produto não encontrado!");
        }
        
        if (categoriaId) {
            const categoria = await this.categoriaRepository.findOneBy({ id: categoriaId });
            if (!categoria) {
                throw new AppError(400, "A nova categoria informada não existe!");
            }            
            produtoExiste.categoria = categoria;
        }
        
        const produtoAtualizado = this.produtoRepository.merge(produtoExiste, rest);
        return await this.produtoRepository.save(produtoAtualizado);
    }

    public async deleteProduto(id: string): Promise<void> {        
        const produto = await this.produtoRepository.findOneBy({ id });
        
        if (!produto) {
            throw new AppError(400, "Produto não encontrado!");
        }
        
        await this.produtoRepository.remove(produto);
    }    
    




}

export default ProdutoService;