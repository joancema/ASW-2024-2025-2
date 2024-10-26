import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CiudadanosService } from './ciudadanos.service';
import { Ciudadano } from './entities/ciudadano.entity';
import { CreateCiudadanoInput } from './dto/create-ciudadano.input';
import { UpdateCiudadanoInput } from './dto/update-ciudadano.input';

@Resolver(() => Ciudadano)
export class CiudadanosResolver {
  constructor(private readonly ciudadanosService: CiudadanosService) {}

  @Mutation(() => Ciudadano)
  createCiudadano(@Args('createCiudadanoInput') createCiudadanoInput: CreateCiudadanoInput) {
    return this.ciudadanosService.create(createCiudadanoInput);
  }

  @Query(() => [Ciudadano], { name: 'ciudadanos' })
  findAll() {
    return this.ciudadanosService.findAll();
  }

  @Query(() => Ciudadano, { name: 'ciudadano' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ciudadanosService.findOne(id);
  }

  @Mutation(() => Ciudadano)
  updateCiudadano(@Args('updateCiudadanoInput') updateCiudadanoInput: UpdateCiudadanoInput) {
    return this.ciudadanosService.update(updateCiudadanoInput.id, updateCiudadanoInput);
  }

  @Mutation(() => Ciudadano)
  removeCiudadano(@Args('id', { type: () => Int }) id: number) {
    return this.ciudadanosService.remove(id);
  }
}
