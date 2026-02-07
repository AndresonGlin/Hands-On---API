import { Column, Entity, PrimaryGeneratedColumn, type NumericType } from "typeorm";

@Entity("categoria")
export class Categoria {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", nullable: false, unique: true })
    nome: string;

    @Column({ type: "varchar", nullable: true })
    descricao: string; //inserir parametro de opcional

    @Column({ type: "timestamp", nullable: false, name: "data_criacao" })
    dataCriacao: Date;

    @Column({ type: "timestamp", nullable: false, name: "data_atualizacao" })
    dataAtualizacao: Date;

}
