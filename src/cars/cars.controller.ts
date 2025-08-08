import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return `aqui se van a registrar los carros`;
  }

  @Get()
  findAll() {
    return "aqui se van a" +
    " consultar todos los carros";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `aqui se va a consultar
     el carro con id ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return `aqui se va a actualizar el carro con id ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `aqui se va a eliminar el carro con id ${id}`;
  }
}
