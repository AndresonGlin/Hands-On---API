import { AppError } from '../errors/AppError.js';
import { appDataSource } from "../database/appDataSource.js";
import { Categoria } from "../entities/Categoria.js";


class CategoriaService {
    private categoriasMemoria: Categoria[] = []
    private categoriaRepository = appDataSource.getRepository(Categoria)


    public async getAllCategorias(): Promise<Categoria[]> {
        return await this.categoriaRepository.find();
    }

    public async getCategoriaById(id: string): Promise<Categoria> {
        const categoria = await this.categoriaRepository.findOneBy({ id });

        if (!categoria) {
            throw new AppError(404, "Categoria não encontrada!");
        }

        return categoria;
    }


    public async addCategoria(body: unknown): Promise<Categoria> {

        const {  nome, descricao  } = body as Categoria;
 
        if(!nome) {
            throw new Error("Missing required Categoria fields");
        }

        const categoriaExiste = await this.categoriaRepository.findOne({ where: { nome } })

        if(categoriaExiste) {
            throw new AppError(400, "Categoria já cadastrada!");
        }
        const novaCategoria = await this.categoriaRepository.create({
            nome,
            descricao           
        });

        await this.categoriaRepository.save(novaCategoria);
        return novaCategoria;
    }

    public async updateCategoria(id: string, body: Categoria) {

        const categoriaExiste = await this.categoriaRepository.findOneBy({ id })  
        
        if(!categoriaExiste) {
            throw new AppError(400, "Categoria não foi encontrada!");
        }

        const update = await this.categoriaRepository.create(body);
        const categoriaUpdate = await this.categoriaRepository.merge(categoriaExiste, update);

        await this.categoriaRepository.save(categoriaUpdate);
        return categoriaUpdate;

    }

    public async deleteCategoria(id: string) {

        const categoria = await this.categoriaRepository.findOneBy({ id });

        if (!categoria) {
            throw new AppError(400, "Categoria não encontrada!");
        }

        await this.categoriaRepository.remove(categoria);


    }

}

export default CategoriaService;