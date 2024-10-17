import { CreateCiudadanoDto,
        CiudadanoDatasource,
        CiudadanoEntity,
        CiudadanoRepository,
        UpdateCiudadanoDto } from '../../domain';


export class CiudadanoRepositoryImpl implements CiudadanoRepository {

  constructor(
    private readonly datasource: CiudadanoDatasource,
  ) { }


  create( createCiudadanoDto: CreateCiudadanoDto ): Promise<CiudadanoEntity> {
    return this.datasource.create( createCiudadanoDto );
  }

  getAll(): Promise<CiudadanoEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<CiudadanoEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateCiudadanoDto: UpdateCiudadanoDto ): Promise<CiudadanoEntity> {
    return this.datasource.updateById( updateCiudadanoDto );
  }

  deleteById( id: number ): Promise<CiudadanoEntity> {
    return this.datasource.deleteById( id );
  }

}


