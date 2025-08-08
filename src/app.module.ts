import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CarsModule } from './cars/cars.module';
import { ReseñasModule } from './reseñas/reseñas.module';
import { EmpresarioModule } from './empresario/empresario.module';

@Module({
  imports: [CarsModule, ReseñasModule, EmpresarioModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
