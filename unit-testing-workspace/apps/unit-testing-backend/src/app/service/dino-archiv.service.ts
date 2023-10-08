import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import path from 'path';

@Injectable()
export class DinoArchivService {

  readDinoArchiv(filename): Promise<any> {
    const storagePath = path.join(process.cwd(), `apps\\unit-testing-backend\\src\\assets`, filename);
    return fs.readFile(storagePath, 'utf8');
  }
}
