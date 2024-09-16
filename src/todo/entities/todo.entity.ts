import {
  ObjectType,
  Field,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';

export enum TodoStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

registerEnumType(TodoStatus, {
  name: 'TodoStatus',
  description: 'The status of the Todo',
});

@ObjectType()
export class User {
  @Field(() => Int, { description: 'Unique identifier for the user' })
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
}

@ObjectType()
export class Todo {
  @Field(() => Int, { description: 'Unique identifier for the Todo' })
  id: number;

  @Field({ description: 'The title of the Todo' })
  title: string;

  @Field({ description: 'A detailed description of the Todo', nullable: true })
  description?: string;

  @Field(() => Date, { description: 'The creation date of the Todo' })
  createdAt: Date;

  @Field(() => Date, {
    description: 'The last update date of the Todo',
    nullable: true,
  })
  updatedAt?: Date;

  @Field(() => TodoStatus, { description: 'The status of the Todo' })
  status: TodoStatus;

  @Field(() => [String], {
    description: 'A list of tags associated with the Todo',
    nullable: 'itemsAndList',
  })
  tags?: string[];

  @Field(() => Float, { description: 'Priority of the Todo', nullable: true })
  priority?: number;

  @Field(() => User, {
    description: 'The user assigned to the Todo',
    nullable: true,
  })
  assignedTo?: User;

  @Field(() => Boolean, {
    description: 'Indicates if the Todo is marked as urgent',
  })
  isUrgent: boolean;

  @Field(() => [Todo], {
    description: 'Sub-tasks related to this Todo',
    nullable: 'itemsAndList',
  })
  subTasks?: Todo[];
}
