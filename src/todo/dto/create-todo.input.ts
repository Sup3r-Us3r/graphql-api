import { Field, InputType, Int, Float } from '@nestjs/graphql';
import {
  IsOptional,
  IsString,
  IsBoolean,
  IsArray,
  IsEnum,
  IsInt,
  IsNumber,
} from 'class-validator';

import { TodoStatus } from '../entities/todo.entity';

@InputType()
export class CreateTodoInput {
  @Field()
  @IsString()
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => TodoStatus, { defaultValue: TodoStatus.PENDING })
  @IsEnum(TodoStatus)
  status: TodoStatus;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  priority?: number;

  @Field(() => Boolean, { defaultValue: false })
  @IsBoolean()
  isUrgent: boolean;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  assignedToId?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  parentTaskId?: number;
}
