/** Beispiel Promises **/
import { DinoArchivService } from './dino-archiv.service';

describe('DinoArchivService', () => {
  let service = new DinoArchivService();

  it('should resolve to archiv data', () => {
    const data = 'Velociraptor Studie 23.10.5 Tag 1';
    const filename = 'VR23105.spec.txt';

    return expect(service.readDinoArchiv(filename)).resolves.toContain(data);
  });

  it('should reject non existing filename', () => {
    const filename = 'notExisting.spec.txt';

    return expect(service.readDinoArchiv(filename)).rejects.toBeDefined();
  });

  /** Alternative: async await **/
  it('should resolve to archiv data', async () => {
    const data = 'Velociraptor Studie 23.10.5 Tag 1';
    const filename = 'VR23105.spec.txt';

    const result = await service.readDinoArchiv(filename);

    expect(result).toContain(data);
  });

});
