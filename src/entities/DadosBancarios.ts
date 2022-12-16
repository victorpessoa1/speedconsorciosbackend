import { Cliente } from './Cliente';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('DadosBancarios')
export class DadosBancarios {

  @ManyToOne(() => Cliente, (cliente) => cliente.EnderecoClientes)
  @JoinColumn({name:'cliente_uuid'})
  @PrimaryColumn('uuid')
  cliente_uuid!: string; 
  
  @Column({type: 'text'})
  CC!: string

  @Column({type: 'text'})
  CP!: string

  @Column({type: 'int'})
  Agencia!: number
}