import { Colaborador } from './../entities/Colaborador';
import { AppDataSource } from '../data-source';

export const colaboradorRepository = AppDataSource.getRepository(Colaborador)