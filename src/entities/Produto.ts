import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Categoria } from "./Categoria.js";

@Entity("produtos")
export class Produto {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", nullable: false })
    nome: string;

    @Column({ type: "varchar", nullable: true })
    descricao: string;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    preco: number;

    @Column({ type: "int", nullable: false })
    estoque: number;

    @CreateDateColumn({ name: "data_criacao" })
    dataCriacao: Date;

    @UpdateDateColumn({ name: "data_atualizacao" })
    dataAtualizacao: Date;

    //Relacionamento: Muitos produtos pertencem a uma categoria
    @ManyToOne(() => Categoria, (categoria) => categoria.produtos, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "categoria_id" })
    categoria: Categoria;
}