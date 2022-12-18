import { Cliente } from './../entities/Cliente';
import { Colaborador } from './../entities/Colaborador';
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

  async atualizarCliente(req: Request, res: Response) { // não ta pegando ainda
    const { nomeCompleto, Cpf, isAtivo} = req.body;
    const { idCliente } = req.params
    const id = idCliente
    console.log({ nomeCompleto, Cpf, isAtivo });

    try {

      const cliente = await clienteRepository.findOneBy({ id: idCliente })
      console.log("encontrou o cliente");
      

      if(!cliente) {
        return res.status(404).json({message: "Cliente não existe"})
      }

      // const colaborador = await colaboradorRepository.findOneBy({ uuid : cliente.colaborador.uuid })
      // if(!colaborador) {
      //   return res.status(404).json({message: "Colaborador não existe"})
      // }

      cliente.nomeCompleto = nomeCompleto ? nomeCompleto : cliente.nomeCompleto
      cliente.Cpf = Cpf ? Cpf : cliente.Cpf
      cliente.isAtivo = isAtivo ? isAtivo : cliente.isAtivo
      console.log("antes do update");
      
      
      const atualizarCliente = await clienteRepository.update({id}, {
        nomeCompleto,
        Cpf,
        isAtivo,
      })

      await clienteRepository.save(cliente)

      console.log("depois do update");
      
      // await clienteRepository.save(cliente)
      
      return res.status(204).json({mensagem: "Cliente atualizado"})

    } catch (error) {
      console.log(error);
      return res.status(500).json({mensagem: 'Ocorreu um erro na Atualização do cliente'})
    }    

  } 

  async excluirCliente(req: Request, res: Response){
    const { idCliente } = req.params
    try{
      
        const clienteSendoExcluido = await clienteRepository.findOneBy({ id: idCliente})
        if (!clienteSendoExcluido) {
          return res.json({message: "cliente inexistente"})
        }
        await clienteRepository.delete(clienteSendoExcluido.id)

        return res.status(200)
    }   catch (error) {
        console.log(error);
        
        return res.status(500).json({
            error: error,
            message: 'internal server error, erro ao deletar cliente'

        })
    }
  }
  




}