import { CreatePreguntaDto } from '../../dtos';
import { PreguntaEntity } from '../../entities/pregunta.entity';
import { PreguntaRepository } from '../../repositories/pregunta.repository';


export interface CreatePreguntaUseCase {
  execute( dto: CreatePreguntaDto ): Promise<PreguntaEntity>
}


export class CreatePregunta implements CreatePreguntaUseCase {
  
  constructor(
    private readonly repository: PreguntaRepository,
  ) {}
  
  execute( dto: CreatePreguntaDto ): Promise<PreguntaEntity> {
    return this.repository.create(dto);
  }

}

