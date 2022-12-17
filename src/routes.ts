import { clienteRepository } from './repositories/clienteRepository';
import { Router } from "express";
import { ClienteController } from "./Controllers/ClienteController";
import { ColaboradorController } from "./Controllers/ColaboradorController";

const routes = Router()

routes.post('/cadastrarcliente/:idcolaborador', new ClienteController().cadastrarCliente)
routes.get('/listarclientes', new ClienteController().listarClientes)


routes.post('/cadastrarcolaborador', new ColaboradorController().create)

export default routes