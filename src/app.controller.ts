import { Controller, 
  Get,
  Post, 
  Patch,
  Delete } from '@nestjs/common';


@Controller()
export class AppController {
 
//Endopoint
//un metodo de una clase 
//que recibe una request 
//y puede enviar una respuesta 
  @Get()
  getMensaje(): string {
    return "aqui se van a consutar datos ";
  }
  @Post()
  //despues de los dos puntos
  //va el tipo de dato de retorno
  //: lo que va a devolver la funcion
  //con el return

  crear(): string {
    return "aqui se van a registrar datos";
  }

  @Patch()
  actualizar(): string {
    return "aqui se van a actualizar datos";
  }

  @Delete()
  borrar(): string {
    return "aqui se van a eliminar datos";
  }

}


