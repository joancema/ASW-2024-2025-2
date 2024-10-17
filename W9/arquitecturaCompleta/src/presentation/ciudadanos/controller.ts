import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateCiudadanoDto, UpdateCiudadanoDto } from '../../domain/dtos';
import { CreateCiudadano, DeleteCiudadano, GetCiudadano, GetCiudadanos, CiudadanoRepository, UpdateCiudadano } from '../../domain';


export class CiudadanosController {

  //* Dependency Injection
  constructor(
    private readonly ciudadanoRepository: CiudadanoRepository,
  ) { }


  public getCiudadanos = ( req: Request, res: Response ) => {
    new GetCiudadanos( this.ciudadanoRepository )
      .execute()
      .then( todos => res.json( todos ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getCiudadanoById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetCiudadano( this.ciudadanoRepository )
      .execute( id )
      .then( todo => res.json( todo ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createCiudadano = ( req: Request, res: Response ) => {
    const [ error, createCiudadanoDto ] = CreateCiudadanoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateCiudadano( this.ciudadanoRepository )
      .execute( createCiudadanoDto! )
      .then( ciudadano => res.json( ciudadano ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateCiudadano = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateTodoDto ] = UpdateCiudadanoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateCiudadano( this.ciudadanoRepository )
      .execute( updateTodoDto! )
      .then( todo => res.json( todo ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteCiudadano = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteCiudadano( this.ciudadanoRepository )
      .execute( id )
      .then( todo => res.json( todo ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 