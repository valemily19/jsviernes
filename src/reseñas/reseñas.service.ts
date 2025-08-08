import { Injectable } from '@nestjs/common';
import { CreateReseñaDto } from './dto/create-reseña.dto';
import { UpdateReseñaDto } from './dto/update-reseña.dto';

@Injectable()
export class ReseñasService {
  create(createReseñaDto: CreateReseñaDto) {
    return 'This action adds a new reseña';
  }

  findAll() {
    return `This action returns all reseñas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reseña`;
  }

  update(id: number, updateReseñaDto: UpdateReseñaDto) {
    return `This action updates a #${id} reseña`;
  }

  remove(id: number) {
    return `This action removes a #${id} reseña`;
  }
}
