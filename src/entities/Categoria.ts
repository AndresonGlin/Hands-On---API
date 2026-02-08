import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Produto } from "./Produto.js";

@Entity("categorias")
export class Categoria {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", nullable: false, unique: true })
    nome: string;

    @Column({ type: "varchar", nullable: true })
    descricao: string;

    @CreateDateColumn({ name: "data_criacao" })
    dataCriacao: Date;

    @UpdateDateColumn({ name: "data_atualizacao" })
    dataAtualizacao: Date;

    //Relacionamento
    @OneToMany(() => Produto, (produto) => produto.categoria)
    produtos: Produto[];
}
