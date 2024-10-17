import { prisma } from '../../data/postgres';
import { CreateCiudadanoDto, CiudadanoDatasource , CiudadanoEntity, UpdateCiudadanoDto } from '../../domain';




export class CiudadanoDatasourceImpl implements CiudadanoDatasource {

  async create( createCiudadanoDto: CreateCiudadanoDto ): Promise<CiudadanoEntity> {
    const ciudadano = await prisma.ciudadano.create({
      data: createCiudadanoDto!
    });

    return CiudadanoEntity.fromObject( ciudadano );
  }

  async getAll(): Promise<CiudadanoEntity[]> {
    const ciudadanos = await prisma.ciudadano.findMany();
    return ciudadanos.map( ciudadano => CiudadanoEntity.fromObject(ciudadano) );
  }

  async findById( id: number ): Promise<CiudadanoEntity> {
    const ciudadano = await prisma.ciudadano.findFirst({
      where: { id }
    });

    if ( !ciudadano ) throw `Ciudadano with id ${ id } not found`;
    return CiudadanoEntity.fromObject(ciudadano);
  }

  async updateById( updateCiudadanoDto: UpdateCiudadanoDto ): Promise<CiudadanoEntity> {
    await this.findById( updateCiudadanoDto.id );
    
    const updatedCiudadano = await prisma.ciudadano.update({
      where: { id: updateCiudadanoDto.id },
      data: updateCiudadanoDto!.values
    });

    return CiudadanoEntity.fromObject(updatedCiudadano);
  }

  async deleteById( id: number ): Promise<CiudadanoEntity> {
    await this.findById( id );
    const deleted = await prisma.ciudadano.delete({
      where: { id }
    });

    return CiudadanoEntity.fromObject( deleted );
  }

}