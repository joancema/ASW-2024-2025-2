import { CiudadanoEntity } from '../../entities/ciudadano.entity';
import { CiudadanoRepository } from '../../repositories/ciudadano.repository';


export interface GetCiudadanosUseCase {
  execute(): Promise<CiudadanoEntity[]>
}


export class GetCiudadanos implements GetCiudadanosUseCase {
  
  constructor(
    private readonly repository: CiudadanoRepository,
  ) {}
  
  execute(): Promise<CiudadanoEntity[]> {
    return this.repository.getAll();
  }

}

