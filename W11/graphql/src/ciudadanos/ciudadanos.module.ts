import { Module } from '@nestjs/common';
import { CiudadanosService } from './ciudadanos.service';
import { CiudadanosResolver } from './ciudadanos.resolver';

@Module({
  providers: [CiudadanosResolver, CiudadanosService],
})
export class CiudadanosModule {}
