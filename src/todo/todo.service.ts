import { Injectable } from '@nestjs/common';

import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async create(createTodoInput: CreateTodoInput) {
    return await this.prisma.todo.create({
      data: {
        title: createTodoInput?.title,
      },
    });
  }

  async findAll() {
    return this.prisma.todo.findMany();
  }

  async findOne(id: number) {
    const todo = await this.prisma.todo.findUnique({ where: { id } });

    if (!todo) {
      return null;
    }

    return todo;
  }

  async update(id: number, updateTodoInput: UpdateTodoInput) {
    return await this.prisma.todo.update({
      where: { id },
      data: updateTodoInput,
    });
  }

  async remove(id: number) {
    return await this.prisma.todo.delete({ where: { id } });
  }
}
