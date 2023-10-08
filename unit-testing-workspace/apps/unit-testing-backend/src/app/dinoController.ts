import { Controller, Get, Param } from '@nestjs/common';
import { DinoService } from './service/dino.service';
import { Dino } from './model/dino.model';

@Controller()
export class DinoController {
  constructor(private readonly dinoService: DinoService) {}

  @Get('/dino/:id')
  getDinoData(@Param('id') id: string): Dino {
    return this.dinoService.getDinoData(id);
  }
}
