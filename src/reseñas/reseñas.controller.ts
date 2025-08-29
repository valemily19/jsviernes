import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReseñasService } from './reseñas.service';
import { CreateReseñaDto } from './dto/create-reseña.dto';
import { UpdateReseñaDto } from './dto/update-reseña.dto';

@Controller('resenas')
export class ReseñasController {
  constructor(private readonly reseñasService: ReseñasService) {}

  @Post()
  create(@Body() createReseñaDto: CreateReseñaDto) {
    return "aqui se van a registrar las reseñas";
  }

  @Get()
  findAll() {
    return this.reseñasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
   return `aqui se va a consultar
     la reseña con id ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReseñaDto: UpdateReseñaDto) {
    return `aqui se va a actualizar la reseña con id ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `aqui se va a eliminar la reseña con id ${id}`;
  }
}
