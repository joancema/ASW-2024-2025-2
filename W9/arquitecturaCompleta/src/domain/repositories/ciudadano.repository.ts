import { CreateCiudadanoDto, UpdateCiudadanoDto } from '../dtos';
import { CiudadanoEntity } from '../entities/ciudadano.entity';



export abstract class CiudadanoRepository {

  abstract create( createTodoDto: CreateCiudadanoDto ): Promise<CiudadanoEntity>;
  abstract getAll(): Promise<CiudadanoEntity[]>;
  abstract findById( id: number ): Promise<CiudadanoEntity>;
  abstract updateById( updateTodoDto: UpdateCiudadanoDto ): Promise<CiudadanoEntity>;
  abstract deleteById( id: number ): Promise<CiudadanoEntity>;

}