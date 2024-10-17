import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateCiudadanoDto, UpdateCiudadanoDto } from '../../domain/dtos';


export class CiudadanosController {

  //* Dependency Injection
  constructor() { }


  public getCiudadanos = async( req: Request, res: Response ) => {
    const todos = await prisma.ciudadano.findMany();
    return res.json( todos );
  };

  public getCiudadanoById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const ciudadano = await prisma.ciudadano.findFirst({
      where: { id }
    });
    
    ( ciudadano )
      ? res.json( ciudadano )
      : res.status( 404 ).json( { error: `TODO with id ${ id } not found` } );
  };

  public createCiudadano = async( req: Request, res: Response ) => {
    
    const [error, createCiudadanoDto] = CreateCiudadanoDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const ciudadano = await prisma.ciudadano.create({
      data: createCiudadanoDto!
    });

    res.json( ciudadano );

  };

  public updateCiudadano = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateCiudadanoDto] = UpdateCiudadanoDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const ciudadano = await prisma.ciudadano.findFirst({
      where: { id }
    });

    if ( !ciudadano ) return res.status( 404 ).json( { error: `Ciudadano with id ${ id } not found` } );

    const updatedCiudadano = await prisma.ciudadano.update({
      where: { id },
      data: updateCiudadanoDto!.values
    });
  
    res.json( updatedCiudadano );

  }


  public deleteCiudadano = async(req:Request, res: Response) => {
    const id = +req.params.id;

    const ciudadano = await prisma.ciudadano.findFirst({
      where: { id }
    });

    if ( !ciudadano ) return res.status(404).json({ error: `Ciudadano with id ${ id } not found` });

    const deleted = await prisma.ciudadano.delete({
      where: { id }
    });

    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Ciudadano with id ${ id } not found` });
    

  }
  


}