import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Ciudadano {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
