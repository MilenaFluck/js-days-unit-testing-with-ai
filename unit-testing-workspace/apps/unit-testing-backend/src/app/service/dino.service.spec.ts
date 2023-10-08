import { DinoService } from './dino.service';
import { UnknownIdError } from '../errors/unknown-id-error';

describe('DinoService', () => {
  let service = new DinoService();

  describe('getDinoData', () => {
    it('should return Dino with requested id', () => {
      const id = '1';
      const dino = service.getDinoData(id);
      expect(dino.id).toBe(id);
    });

    /** Beispiel Error Testing **/
    it('should throw error on unknown id', () => {
      const id = '4';
      expect(() => service.getDinoData(id)).toThrowError(new UnknownIdError('Dino mit der ID ' + id + ' konnte nicht gefunden werden'));
      // expect(() => service.getDinoData(id)).toThrowError('Dino mit der ID ' + id + ' konnte nicht gefunden werden');
      // expect(() => service.getDinoData(id)).toThrowError('konnte nicht gefunden werden');
      // expect(() => service.getDinoData(id)).toThrowError(/konnte nicht gefunden werden/);
      // expect(() => service.getDinoData(id)).toThrowError(Error);
      // expect(() => service.getDinoData(id)).toThrowError(UnknownIdError);
      // expect(() => service.getDinoData(id)).toThrowError(new Error('Dino mit der ID ' + id + ' konnte nicht gefunden werden'));
    });
  });
});
