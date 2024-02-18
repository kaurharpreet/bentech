import { PartialType } from '@nestjs/swagger';
import { CreateLifterDto } from './create-lifter.dto';

export class UpdateLifterDto extends PartialType(CreateLifterDto) {}
