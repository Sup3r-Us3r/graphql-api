import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => Int, { description: 'Id field' })
  id: number;

  @Field()
  title: string;
}
