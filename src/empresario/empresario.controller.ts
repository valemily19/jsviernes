import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpresarioService } from './empresario.service';
import { CreateEmpresarioDto } from './dto/create-empresario.dto';
import { UpdateEmpresarioDto } from './dto/update-empresario.dto';

@Controller('empresario')
export class EmpresarioController {
  constructor(private readonly empresarioService: EmpresarioService) {}

  @Post()
  create(@Body() createEmpresarioDto: CreateEmpresarioDto) {
    return `Aqui se van a registrar los empresarios`;
  }

  @Get()
  findAll() {
    return this.empresarioService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empresarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpresarioDto: UpdateEmpresarioDto) {
    return `Aqui se va a actualizar un empresario con id ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.empresarioService.remove(+id);
    return{
      success : true,
      carro_eliminado: id
    }

  }
}
