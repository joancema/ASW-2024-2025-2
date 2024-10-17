import { UpdateCiudadanoDto } from '../../dtos';
import { CiudadanoEntity } from '../../entities/ciudadano.entity';
import { CiudadanoRepository } from '../../repositories/ciudadano.repository';


export interface UpdateCiudadanoUseCase {
  execute( dto: UpdateCiudadanoDto ): Promise<CiudadanoEntity>
}


export class UpdateCiudadano implements UpdateCiudadanoUseCase {
  
  constructor(
    private readonly repository: CiudadanoRepository,
  ) {}
  
  execute( dto: UpdateCiudadanoDto ): Promise<CiudadanoEntity> {
    return this.repository.updateById(dto);
  }

}

