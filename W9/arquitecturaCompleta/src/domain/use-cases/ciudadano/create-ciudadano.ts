import { CreateCiudadanoDto } from '../../dtos';
import { CiudadanoEntity } from '../../entities/ciudadano.entity';
import { CiudadanoRepository } from '../../repositories/ciudadano.repository';


export interface CreateCiudadanoUseCase {
  execute( dto: CreateCiudadanoDto ): Promise<CiudadanoEntity>
}


export class CreateCiudadano implements CreateCiudadanoUseCase {
  
  constructor(
    private readonly repository: CiudadanoRepository,
  ) {}
  
  execute( dto: CreateCiudadanoDto ): Promise<CiudadanoEntity> {
    return this.repository.create(dto);
  }

}

