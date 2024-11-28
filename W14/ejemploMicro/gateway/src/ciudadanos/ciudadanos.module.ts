import { Module } from '@nestjs/common';
import { CiudadanosController } from './ciudadanos.controller';

@Module({
  controllers: [CiudadanosController],
  providers: [],
})
export class CiudadanosModule {}
