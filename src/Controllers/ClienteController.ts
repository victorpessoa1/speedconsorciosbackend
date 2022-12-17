import { colaboradorRepository } from './../repositories/colaboradorRepository';
import { clienteRepository } from './../repositories/clienteRepository';
import { Request, Response } from "express";

export class ClienteController {

  async cadastrarCliente(req: Request, res: Response) {
    const { nomeCompleto, Cpf, isAtivo} = req.body;
    const { idColaborador } = req.params
    
    console.log({ nomeCompleto, Cpf, isAtivo, idColaborador });

    try {

      const colaborador = await colaboradorRepository.findOneBy({ uuid: idColaborador })
      if(!colaborador) {
        return res.status(404).json({message: "Colaborador não existe"})
      }
      
      const novoCliente = clienteRepository.create({
        nomeCompleto,
        Cpf,
        isAtivo,
        colaborador
      })

      await clienteRepository.save(novoCliente)

      return res.status(201).json(novoCliente)

    } catch (error) {
      console.log(error);
      return res.status(500).json({mensagem: 'Ocorreu um erro na criacao de cliente'})
    }    
  } 
  
  async listarClientes(req: Request, res: Response){
    try{
        const clientes = await clienteRepository.find()

        return res.status(200).json(clientes)

    }   catch (error) {
        return res.status(500).json({
            message: 'internal server error'
        })
    }
}




}