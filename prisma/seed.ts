// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      name: 'John Doe 1',
      email: 'johndoe1@example.com',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'John Doe 2',
      email: 'johndoe2@example.com',
    },
  });

  const user3 = await prisma.user.create({
    data: {
      name: 'John Doe 3',
      email: 'johndoe3@example.com',
    },
  });

  // Create todos and assign users
  await prisma.todo.createMany({
    data: [
      {
        title: 'Learn GraphQL',
        description: 'Review GraphQL concepts and practice',
        status: 'PENDING',
        tags: ['graphql'],
        assignedToId: user1.id,
      },
      {
        title: 'Build Prisma Seed',
        description: 'Create a seed script to populate database',
        status: 'IN_PROGRESS',
        tags: ['prisma', 'seed'],
        assignedToId: user2.id,
      },
      {
        title: 'Review NestJS',
        description: 'Go through NestJS documentation and examples',
        status: 'PENDING',
        tags: ['nestjs'],
        assignedToId: user3.id,
      },
    ],
  });
}

main()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
