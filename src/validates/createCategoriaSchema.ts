import { z } from "zod";

export const categoriaSchema = z.object({
    nome: z.preprocess(
        (val) => (val === undefined ? "" : val),
        z.string().min(3, "O nome deve ter no mínimo 3 caracteres").max(100)
    ),
    descricao: z.preprocess(
        (val) => (val === "" || val === null ? undefined : val),
        z.string().optional()
    )
});