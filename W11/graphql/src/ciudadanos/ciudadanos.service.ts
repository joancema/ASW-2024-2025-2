import { Injectable } from '@nestjs/common';
import { CreateCiudadanoInput } from './dto/create-ciudadano.input';
import { UpdateCiudadanoInput } from './dto/update-ciudadano.input';

@Injectable()
export class CiudadanosService {
  create(createCiudadanoInput: CreateCiudadanoInput) {
    return 'This action adds a new ciudadano';
  }

  findAll() {
    return [];
  }

  findOne(id: number) {
    return `This action returns a #${id} ciudadano`;
  }

  update(id: number, updateCiudadanoInput: UpdateCiudadanoInput) {
    return `This action updates a #${id} ciudadano`;
  }

  remove(id: number) {
    return `This action removes a #${id} ciudadano`;
  }
}
