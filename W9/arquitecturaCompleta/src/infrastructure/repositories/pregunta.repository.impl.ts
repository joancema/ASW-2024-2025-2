import { CreatePreguntaDto,
    PreguntaDatasource,
    PreguntaEntity,
    PreguntaRepository,
    UpdatePreguntaDto } from '../../domain';


export class PreguntaRepositoryImpl implements PreguntaRepository {

constructor(
private readonly datasource: PreguntaDatasource,
) { }


create( createPreguntaDto: CreatePreguntaDto ): Promise<PreguntaEntity> {
return this.datasource.create( createPreguntaDto );
}

getAll(): Promise<PreguntaEntity[]> {
return this.datasource.getAll();
}

findById( id: number ): Promise<PreguntaEntity> {
return this.datasource.findById( id );
}

updateById( updatePreguntaDto: UpdatePreguntaDto ): Promise<PreguntaEntity> {
return this.datasource.updateById( updatePreguntaDto );
}

deleteById( id: number ): Promise<PreguntaEntity> {
return this.datasource.deleteById( id );
}

}


