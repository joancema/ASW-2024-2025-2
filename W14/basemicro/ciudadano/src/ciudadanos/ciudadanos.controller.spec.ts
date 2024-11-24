import { Test, TestingModule } from '@nestjs/testing';
import { CiudadanosController } from './ciudadanos.controller';
import { CiudadanosService } from './ciudadanos.service';

describe('CiudadanosController', () => {
  let controller: CiudadanosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CiudadanosController],
      providers: [CiudadanosService],
    }).compile();

    controller = module.get<CiudadanosController>(CiudadanosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
