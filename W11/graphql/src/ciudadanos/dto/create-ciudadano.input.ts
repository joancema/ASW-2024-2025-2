import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCiudadanoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
