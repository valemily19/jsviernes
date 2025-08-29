import { Module } from '@nestjs/common';
import { ReseñasService } from './reseñas.service';
import { ReseñasController } from './reseñas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ReseñasController],
  providers: [ReseñasService],
})
export class ReseñasModule {}
