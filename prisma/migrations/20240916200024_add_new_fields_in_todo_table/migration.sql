-- CreateEnum
CREATE TYPE "TodoStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED');

-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "assignedToId" INTEGER,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "isUrgent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "parentTaskId" INTEGER,
ADD COLUMN     "priority" DOUBLE PRECISION,
ADD COLUMN     "status" "TodoStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "tags" TEXT[],
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_parentTaskId_fkey" FOREIGN KEY ("parentTaskId") REFERENCES "Todo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
