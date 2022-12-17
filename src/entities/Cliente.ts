import { Colaborador } from './Colaborador';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EnderecoCliente } from './EnderecoCliente';

@Entity('clientes')
export class Cliente {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({type: 'text'})
    nomeCompleto!: string

    @Column({type: 'text'})
    Cpf!: string

    @Column({type: 'int'})
    isAtivo!: number

    @ManyToOne(() => Colaborador, (colaborador) => colaborador.Clientes)
    @JoinColumn({name:'idColaborador'})
    colaborador!: Colaborador

    @OneToMany (() => EnderecoCliente, (enderecoCliente) => enderecoCliente.cliente_uuid)
    EnderecoClientes!: EnderecoCliente[]

}