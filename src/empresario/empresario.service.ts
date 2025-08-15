import { Injectable } from '@nestjs/common';
import { CreateEmpresarioDto } from './dto/create-empresario.dto';
import { UpdateEmpresarioDto } from './dto/update-empresario.dto';
import { Empresario } from './entities/empresario.entity';

@Injectable()
export class EmpresarioService {

  //establecer el origen de datos 
  //datos como nun arreglo:

  private Empresarios: Empresario [] = [

   new Empresario (1, "Samuel", "Agudelo",17, 3214108745 , true , "samu21@gmail.com" , "1234" ),

   new Empresario (2, "Sofia", "Herrera",20, 3214105545 , false , "sofia21@gmail.com" , "3334" )

  ];



  create(createEmpresarioDto: CreateEmpresarioDto) {
    return 'This action adds a new empresario';
  }

  findAll() {
    return this.Empresarios

  }

  findOne(id: number) {
   return  this.Empresarios.find(function(empresario){
      return empresario.id === id
    })
  }

  update(id: number, updateEmpresarioDto: UpdateEmpresarioDto) {
    return `This action updates a #${id} empresario`;
  }

  remove(id: number) {
   this.Empresarios = this.
   Empresarios.
    filter (function(empresario){
      return empresario.id !==id
    })
  }
}
