import { CiudadanoEntity } from '../../entities/ciudadano.entity';
import { CiudadanoRepository } from '../../repositories/ciudadano.repository';


export interface DeleteCiudadanoUseCase {
  execute( id: number ): Promise<CiudadanoEntity>
}


export class DeleteCiudadano implements DeleteCiudadanoUseCase {
  
  constructor(
    private readonly repository: CiudadanoRepository,
  ) {}
  
  execute( id: number ): Promise<CiudadanoEntity> {
    return this.repository.deleteById(id);
  }

}

