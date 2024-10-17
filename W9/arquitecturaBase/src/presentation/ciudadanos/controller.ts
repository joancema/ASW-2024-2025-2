import { Request, Response } from 'express';

import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export class CiudadanosController {

  //* Dependency Injection
  constructor() { }


  public getCiudadanos = async ( req: Request, res: Response ) => {
    const ciudadanos = await prisma.ciudadano.findMany()
    return res.json(ciudadanos)
  };

  public getCiudadanoById = async ( req: Request, res: Response ) => {
    const { id } = req.params
    const ciudadano = await prisma.ciudadano.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    res.json(ciudadano)
  };

  public createCiudadano = async ( req: Request, res: Response ) => {
    const {  nombre } = req.body
    const ciudadano = await prisma.ciudadano.create({
        data: {
        nombre,
        }
    })
    res.json(ciudadano)

  };

}