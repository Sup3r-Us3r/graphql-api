import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async create(createTodoInput: CreateTodoInput) {
    const {
      title,
      description,
      status,
      tags,
      priority,
      isUrgent,
      assignedToId,
      parentTaskId,
    } = createTodoInput;

    return await this.prisma.todo.create({
      data: {
        title,
        description,
        status,
        tags,
        priority,
        isUrgent,
        assignedTo: assignedToId
          ? { connect: { id: assignedToId } }
          : undefined,
        parentTask: parentTaskId
          ? { connect: { id: parentTaskId } }
          : undefined,
      },
    });
  }

  async findAll() {
    return this.prisma.todo.findMany({
      include: {
        assignedTo: true,
        subTasks: true,
        parentTask: true,
      },
    });
  }

  async findOne(id: number) {
    const todo = await this.prisma.todo.findUnique({
      where: { id },
      include: {
        assignedTo: true,
        subTasks: true,
        parentTask: true,
      },
    });

    if (!todo) {
      return null;
    }

    return todo;
  }

  async update(id: number, updateTodoInput: UpdateTodoInput) {
    const {
      title,
      description,
      status,
      tags,
      priority,
      isUrgent,
      assignedToId,
      parentTaskId,
    } = updateTodoInput;

    return await this.prisma.todo.update({
      where: { id },
      data: {
        title,
        description,
        status,
        tags,
        priority,
        isUrgent,
        assignedTo: assignedToId
          ? { connect: { id: assignedToId } }
          : undefined,
        parentTask: parentTaskId
          ? { connect: { id: parentTaskId } }
          : undefined,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.todo.delete({
      where: { id },
    });
  }
}
