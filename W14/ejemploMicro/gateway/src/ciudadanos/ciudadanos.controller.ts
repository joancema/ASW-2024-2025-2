import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateCiudadanoDto } from './dto/create-ciudadano.dto';
import { UpdateCiudadanoDto } from './dto/update-ciudadano.dto';

@Controller('ciudadanos')
export class CiudadanosController {
  constructor() {}

  @Post()
  create(@Body() createCiudadanoDto: CreateCiudadanoDto) {
  }

  @Get()
  findAll() {
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCiudadanoDto: UpdateCiudadanoDto) {
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
  }
}
