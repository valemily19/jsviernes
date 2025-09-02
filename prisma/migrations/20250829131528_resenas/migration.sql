-- CreateTable
CREATE TABLE "resenas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "calificacion_resenia" TEXT NOT NULL,
    "comentario_resenia" DATETIME NOT NULL,
    "empresario_id" INTEGER NOT NULL,
    CONSTRAINT "resenas_empresario_id_fkey" FOREIGN KEY ("empresario_id") REFERENCES "empresario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
