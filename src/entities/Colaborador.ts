import { Cliente } from './Cliente';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('colaboradores')
export class Colaborador {

    @PrimaryGeneratedColumn("uuid")
    uuid!: string   
    
    @Column({type: 'text'})
    nomeCompleto!: string

    @Column({type: 'text'})
    Cpf!: string

    @Column({type: 'int'})
    isAtivo!: number

    @OneToMany(() => Cliente, (cliente) => cliente.colaborador)
    Clientes!: Cliente[]
}