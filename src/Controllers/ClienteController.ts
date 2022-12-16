import { Request, Response } from "express";

export class ClienteController {

  async create(req: Request, res: Response) {
    const { dados } = req.body;

    if (!dados) {
      return res.status(400).json({mensagem: 'Dados inválidos.'});
    }

    try {

    } catch (error) {
      console.log(error);
      return res.status(500).json({mensagem: 'Ocorreu um erro na criacao de cliente'})
    }
    return res.json("Tudo certo em ClienteController")
    
  } 


}