import { promises as fs } from 'fs';
import path from 'path';

export default function writeDinosaurData(data, filename) {
  const storagePath = path.join(process.cwd(), `apps\\unit-testing-backend\\src\\assets`, filename);
  return fs.writeFile(storagePath, data);
}
