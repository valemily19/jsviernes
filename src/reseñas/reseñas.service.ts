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
    return 'This action adds a new marca';
  }

  findAll() {
    return this.service.lugar.findMany()
  }

  findOne(id: number) {
    return this.service.lugar.findFirst({
      where: {id:id}
    })
  }

  update(id: number, CreateReseñaDto: CreateReseñaDto) {
    return `This action updates a #${id} marca`;
  }

  remove(id: number) {
    return `This action removes a #${id} marca`;
  }
}