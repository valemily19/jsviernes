import { Module } from '@nestjs/common';
import { EmpresarioService } from './empresario.service';
import { EmpresarioController } from './empresario.controller';

@Module({
  controllers: [EmpresarioController],
  providers: [EmpresarioService],
})
export class EmpresarioModule {}
