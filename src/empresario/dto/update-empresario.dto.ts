import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpresarioDto } from './create-empresario.dto';

export class UpdateEmpresarioDto extends PartialType(CreateEmpresarioDto) {}
