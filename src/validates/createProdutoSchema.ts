import { z } from "zod";

export const produtoSchema = z.object({
    nome: z.preprocess((val) => val ?? "", z.string().min(2, "Nome é obrigatório")),
    descricao: z.preprocess(
        (val) => (val === "" || val === null ? undefined : val),
        z.string().optional()
    ),
    preco: z.preprocess(
        (val) => Number(val),
        z.number().positive("O preço deve ser maior que zero")
    ),
    estoque: z.preprocess(
        (val) => Number(val),
        z.number().int().min(0, "O estoque não pode ser negativo")
    ),
    categoriaId: z.string().uuid("ID da categoria inválido")
});