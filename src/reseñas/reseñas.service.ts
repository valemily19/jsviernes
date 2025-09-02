import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateReseñaDto } from './dto/create-reseña.dto';
import { UpdateReseñaDto } from './dto/update-reseña.dto';


@Injectable()
export class ReseñasService {

  constructor(
    private service: PrismaService
  ){}



  create(createReseñaDto: CreateReseñaDto) {
    // Validación simple y mensaje personalizado
    if (!createReseñaDto.comentario_resenia || !createReseñaDto.Fecha_resenia || !createReseñaDto.empresario_id) {
      return { error: 'Todos los campos son obligatorios: comentario_resenia, Fecha_resenia, empresario_id' };
    }
    // Mensaje de registro
    console.log('Registrando reseña:', createReseñaDto);
    return this.service.resenas.create({ data: createReseñaDto });
  }

  findAll() {
    return this.service.resenas.findMany();
  }

  findOne(id: number) {
    return this.service.resenas.findUnique({
      where: { id },
    });
  }

  update(id: number, updateReseñaDto: UpdateReseñaDto) {
    // Implementación real para actualizar una reseña
    return this.service.resenas.update({
      where: { id },
      data: updateReseñaDto,
    });
  }

  remove(id: number) {
    // Implementación real para eliminar una reseña
    return this.service.resenas.delete({
      where: { id },
    });
  }
}