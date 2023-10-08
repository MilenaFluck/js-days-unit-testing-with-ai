import { DinoController } from './dinoController';
import { DinoService } from './service/dino.service';
import { Dino } from './model/dino.model';

describe('DinoController', () => {
  let appController = new DinoController(new DinoService());

  describe('getDinoData', () => {
    it('should return Dino Data', () => {
      const id = '1';
      const data = appController.getDinoData(id);
      expect(data).toEqual(new Dino(id, 'Blue', 10, 'Velociraptor', true));
    });
  });
});
