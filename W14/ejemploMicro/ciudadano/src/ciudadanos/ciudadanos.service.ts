import { Injectable } from '@nestjs/common';
import { CreateCiudadanoDto } from './dto/create-ciudadano.dto';
import { UpdateCiudadanoDto } from './dto/update-ciudadano.dto';

const ciudadanos = [
  {
    id: 1,
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
  },
  {
    id: 2,
    nombre: 'Maria',
    apellido: 'Gomez',
    edad: 25,
  }
]


@Injectable()
export class CiudadanosService {
  create(createCiudadanoDto: CreateCiudadanoDto) {
    return 'This action adds a new ciudadano';
  }

  findAll() {
    return ciudadanos;
  }

  findOne(id: number) {
    return `This action returns a #${id} ciudadano`;
  }

  update(id: number, updateCiudadanoDto: UpdateCiudadanoDto) {
    return `This action updates a #${id} ciudadano`;
  }

  remove(id: number) {
    return `This action removes a #${id} ciudadano`;
  }
}
