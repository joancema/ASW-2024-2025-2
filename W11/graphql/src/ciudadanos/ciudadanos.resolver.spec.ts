import { Test, TestingModule } from '@nestjs/testing';
import { CiudadanosResolver } from './ciudadanos.resolver';
import { CiudadanosService } from './ciudadanos.service';

describe('CiudadanosResolver', () => {
  let resolver: CiudadanosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CiudadanosResolver, CiudadanosService],
    }).compile();

    resolver = module.get<CiudadanosResolver>(CiudadanosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
