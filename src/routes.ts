import { Router } from "express";
import { ClienteController } from "./Controllers/ClienteController";
import { ColaboradorController } from "./Controllers/ColaboradorController";

const routes = Router()

routes.post('/cadastrarcliente/:idcolaborador', new ClienteController().create)


routes.post('/cadastrarcolaborador', new ColaboradorController().create)

export default routes