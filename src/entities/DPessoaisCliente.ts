import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, Timestamp } from "typeorm";
import { Cliente } from "./Cliente";

@Entity('DPessoaisCliente')
export class DPessoaisCliente {

    @ManyToOne(() => Cliente, (cliente) => cliente.EnderecoClientes)
    @JoinColumn({name:'cliente_uuid'})
    @PrimaryColumn('uuid')
    cliente_uuid!: string

    @Column({type: 'timestamp'})
    Nascimento!: Timestamp

    @Column({type: 'text'})
    Sexo!: string

    @Column({type: 'text'})
    RG!: string

    @Column({type: 'timestamp'})
    DataEmissao!: Timestamp

    @Column({type: 'text'})
    Oexpedidor!: string

    @Column({type: 'text'})
    ECivel!: string
}