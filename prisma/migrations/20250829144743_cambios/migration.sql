/*
  Warnings:

  - You are about to drop the column `calificacion_resenia` on the `resenas` table. All the data in the column will be lost.
  - Added the required column `Fecha_resenia` to the `resenas` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_resenas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "comentario_resenia" TEXT NOT NULL,
    "Fecha_resenia" DATETIME NOT NULL,
    "empresario_id" INTEGER NOT NULL,
    CONSTRAINT "resenas_empresario_id_fkey" FOREIGN KEY ("empresario_id") REFERENCES "empresario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_resenas" ("comentario_resenia", "empresario_id", "id") SELECT "comentario_resenia", "empresario_id", "id" FROM "resenas";
DROP TABLE "resenas";
ALTER TABLE "new_resenas" RENAME TO "resenas";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
