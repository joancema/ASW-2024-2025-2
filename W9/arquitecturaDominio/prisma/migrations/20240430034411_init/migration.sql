-- CreateTable
CREATE TABLE "Ciudadano" (
    "id" SERIAL NOT NULL,
    "identificacion" TEXT NOT NULL,
    "nombre" TEXT,

    CONSTRAINT "Ciudadano_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ciudadano_identificacion_key" ON "Ciudadano"("identificacion");
