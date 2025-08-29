import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CarsModule } from './cars/cars.module';
import { ReseñasModule } from './reseñas/reseñas.module';
import { EmpresarioModule } from './empresario/empresario.module';
import { PrismaModule } from './prisma/prisma.module';
import { MarcasModule } from './marcas/marcas.module';

@Module({
  imports: [CarsModule, ReseñasModule, EmpresarioModule, PrismaModule, MarcasModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
