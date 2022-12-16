import { Router } from "express";
import { ClienteController } from "./Controllers/ClienteController";

const routes = Router()

routes.post('/cliente', new ClienteController().create)


export default routes