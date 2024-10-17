import { CreatePreguntaDto, UpdatePreguntaDto } from '../dtos';
import { PreguntaEntity } from '../entities/pregunta.entity';



export abstract class PreguntaDatasource {

  abstract create( createPreguntaDto: CreatePreguntaDto ): Promise<PreguntaEntity>;
  abstract getAll(): Promise<PreguntaEntity[]>;
  abstract findById( id: number ): Promise<PreguntaEntity>;
  abstract updateById( updatePreguntaDto: UpdatePreguntaDto ): Promise<PreguntaEntity>;
  abstract deleteById( id: number ): Promise<PreguntaEntity>;

}