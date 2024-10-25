import { Species } from '../../chapter-3-writing-good-tests/model';
import { DinoUtil } from './dino.util';
import { Food } from './food.enum';
import isHerbivore = DinoUtil.isHerbivore;

export class Dino {
  name: string = '';
  // age in months
  age: number = 0;
  species: Species = Species.UNKNOWN;
  trained: boolean = false;

  getFood(): Food {
    if (this.age < 6) {
      return Food.MILK;
    }
    return isHerbivore(this.species) ? Food.GRASS : Food.MEAT;
  }

  isTrainable(): boolean {
    if (isHerbivore(this.species) && this.age < 36) {
      return true;
    }
    return !isHerbivore(this.species) && this.age < 12;
  }

  train(): void {
    if (this.isTrainable()) {
      this.trained = true;
    }
  }
}
