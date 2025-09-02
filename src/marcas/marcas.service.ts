
import { Injectable } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MarcasService {

  constructor( 
     private service: PrismaService
  ){}



  create(createMarcaDto: CreateMarcaDto) {
    return this.service.marcas.create({ data: createMarcaDto });
  }

  findAll() {
    return this.service.marcas.findMany();
  }

  findOne(id: number) {
    return this.service.marcas.findUnique({
      where: { id },
    });
  }

  update(id: number, updateMarcaDto: UpdateMarcaDto) {
    return this.service.marcas.update({
      where: { id },
      data: updateMarcaDto,
    });
  }

  remove(id: number) {
    return this.service.marcas.delete({
      where: { id },
    });
  }
}
