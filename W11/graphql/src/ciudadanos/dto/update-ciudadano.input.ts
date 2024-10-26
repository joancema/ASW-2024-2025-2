import { CreateCiudadanoInput } from './create-ciudadano.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCiudadanoInput extends PartialType(CreateCiudadanoInput) {
  @Field(() => Int)
  id: number;
}
