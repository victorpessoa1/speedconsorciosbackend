import { Request, Response } from "express";
import { colaboradorRepository } from '../repositories/colaboradorRepository';

export class ColaboradorController {

  async create(req: Request, res: Response) {
    const { nomeCompleto, Cpf, isAtivo} = req.body;
    
    console.log({ nomeCompleto, Cpf, isAtivo});

    try {

      const novoColaborador = colaboradorRepository.create({nomeCompleto, Cpf, isAtivo})

      await colaboradorRepository.save(novoColaborador)

      return res.status(201).json(novoColaborador)

    } catch (error) {
      console.log(error);
      return res.status(500).json({mensagem: 'Ocorreu um erro na criacao de Colaborador'})
    }    
  } 


}