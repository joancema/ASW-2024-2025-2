/*
  Warnings:

  - You are about to drop the column `identificacion` on the `Ciudadano` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nombre]` on the table `Ciudadano` will be added. If there are existing duplicate values, this will fail.
  - Made the column `nombre` on table `Ciudadano` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Ciudadano_identificacion_key";

-- AlterTable
ALTER TABLE "Ciudadano" DROP COLUMN "identificacion",
ALTER COLUMN "nombre" SET NOT NULL;

-- CreateTable
CREATE TABLE "Pregunta" (
    "id" SERIAL NOT NULL,
    "texto" TEXT,

    CONSTRAINT "Pregunta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Respuesta" (
    "id" SERIAL NOT NULL,
    "ciudadanoId" INTEGER NOT NULL,
    "preguntaId" INTEGER NOT NULL,
    "respuesta" BOOLEAN NOT NULL,

    CONSTRAINT "Respuesta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nombre_key" ON "Usuario"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "Usuario"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "Ciudadano_nombre_key" ON "Ciudadano"("nombre");

-- AddForeignKey
ALTER TABLE "Respuesta" ADD CONSTRAINT "Respuesta_ciudadanoId_fkey" FOREIGN KEY ("ciudadanoId") REFERENCES "Ciudadano"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respuesta" ADD CONSTRAINT "Respuesta_preguntaId_fkey" FOREIGN KEY ("preguntaId") REFERENCES "Pregunta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
