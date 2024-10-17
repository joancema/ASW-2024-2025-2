import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateCiudadanoDto, UpdateCiudadanoDto } from '../../domain/dtos';
import { CiudadanoRepository } from '../../domain';


export class CiudadanosController {

  //* Dependency Injection
  constructor(
    private readonly ciudadanoRepository: CiudadanoRepository,
  ) { }


  public getCiudadanos = async ( req: Request, res: Response ) => {
    const ciudadanos = await this.ciudadanoRepository.getAll();
    return res.json( ciudadanos );
  };

  public getCiudadanoById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const ciudadano = await this.ciudadanoRepository.findById( id );
      res.json( ciudadano );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createCiudadano = async ( req: Request, res: Response ) => {
    const [ error, createCiudadanoDto ] = CreateCiudadanoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const todo = await this.ciudadanoRepository.create( createCiudadanoDto! );
    res.json( todo );

  };

  public updateCiudadano = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateCiudadanoDto ] = UpdateCiudadanoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedCiudadano = await this.ciudadanoRepository.updateById( updateCiudadanoDto! );
    return res.json( updatedCiudadano );

  };


  public deleteTodo = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedTodo = await this.ciudadanoRepository.deleteById( id );
    res.json( deletedTodo );

  };



}