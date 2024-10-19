import { Ciudadano } from '../../data/mongo';
import { CreateCiudadanoDto, CiudadanoDatasource , CiudadanoEntity, UpdateCiudadanoDto } from '../../domain';




export class CiudadanoDatasourceImpl implements CiudadanoDatasource {

  async create( createCiudadanoDto: CreateCiudadanoDto ): Promise<CiudadanoEntity> {
    const ciudadano = new Ciudadano(createCiudadanoDto);
    await ciudadano.save();
    return CiudadanoEntity.fromObject( ciudadano );
    
  }

  async getAll(): Promise<CiudadanoEntity[]>   {
    try {
      const ciudadanos = await Ciudadano.find();
      console.log(ciudadanos);
      return ciudadanos.map( ciudadano => CiudadanoEntity.fromObject(ciudadano) );
    }
    catch (error) {
      console.log(error);
      return [];
    }
  }

  async findById( id: number ): Promise<CiudadanoEntity> {
    const ciudadano = await Ciudadano.findById(id);
    if ( !ciudadano ) throw `Ciudadano with id ${ id } not found`;
    return CiudadanoEntity.fromObject(ciudadano);
  }

  async updateById( updateCiudadanoDto: UpdateCiudadanoDto ): Promise<CiudadanoEntity> {
    const ciudadano = await Ciudadano.findById(updateCiudadanoDto.id);
    if ( !ciudadano ) throw `Ciudadano with id ${ updateCiudadanoDto.id } not found`;
    ciudadano.set(updateCiudadanoDto.values);
    await ciudadano.save();
    return CiudadanoEntity.fromObject(ciudadano);
  }

  async deleteById( id: number ): Promise<CiudadanoEntity> {
    const ciudadano = await Ciudadano.findById(id);
    if ( !ciudadano ) throw `Ciudadano with id ${ id } not found`;
    await Ciudadano.deleteOne({ _id:id});
    return CiudadanoEntity.fromObject(ciudadano);
  }

}