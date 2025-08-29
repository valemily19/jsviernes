-- CreateTable
CREATE TABLE "carros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "modelo" TEXT NOT NULL,
    "fecha_fabricacion" DATETIME NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "precio" DECIMAL NOT NULL
);
