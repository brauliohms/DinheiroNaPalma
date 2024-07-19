-- CreateTable
CREATE TABLE "Registros" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "descricao" TEXT NOT NULL,
    "data" DATE NOT NULL,
    "tipo" TEXT NOT NULL,
    "valor" DECIMAL NOT NULL,
    "status" TEXT NOT NULL
);
