import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Cliente } from "./Cliente";

@Entity('EnderecoCLiente')
export class EnderecoCliente {

    @ManyToOne(() => Cliente, (cliente) => cliente.EnderecoClientes)
    @JoinColumn({name:'cliente_uuid'})
    @PrimaryColumn('uuid')
    cliente_uuid!: string;

    @Column({type: 'text'})
    Endereco!: string

    @Column({type: 'text'})
    Rua!: string

    @Column({type: 'text'})
    Bairro!: string

    @Column({type: 'text'})
    Cidade!: string

    @Column({type: 'text'})
    Estado!: string

    @Column({type: 'text'})
    Cep!: string

    @Column({type: 'text'})
    Pais!: string



}