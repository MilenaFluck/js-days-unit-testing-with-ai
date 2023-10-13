import { Module } from '@nestjs/common';

import { DinoController } from './dinoController';
import { DinoService } from './service/dino.service';

@Module({
  imports: [],
  controllers: [DinoController],
  providers: [DinoService],
})
export class AppModule {}
