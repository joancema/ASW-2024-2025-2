import { CiudadanoEntity } from '../../entities/ciudadano.entity';
import { CiudadanoRepository } from '../../repositories/ciudadano.repository';


export interface GetCiudadanoUseCase {
  execute( id: number ): Promise<CiudadanoEntity>
}


export class GetCiudadano implements GetCiudadanoUseCase {
  
  constructor(
    private readonly repository: CiudadanoRepository,
  ) {}
  
  execute( id: number ): Promise<CiudadanoEntity> {
    return this.repository.findById(id);
  }

}

