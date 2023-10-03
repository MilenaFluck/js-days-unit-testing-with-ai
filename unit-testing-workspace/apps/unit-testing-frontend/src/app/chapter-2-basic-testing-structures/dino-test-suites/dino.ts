import { Species } from '../../chapter-3-writing-good-tests/model';
import { isVegetarian } from '../triple-a-basics/triple-a-basics';
import { Food } from './food.enum';

export class Dino {
  name: string = '';
  // age in months
  age: number = 0;
  species: Species = Species.UNKNOWN;
  trained: boolean = false;

  constructor() {
  }

  getFood(): Food {
    if (this.age < 6) {
      return Food.MILK;
    }
    return this.isVegetarien() ? Food.GRASS : Food.MEAT;
  }

  isVegetarien(): boolean {
    return isVegetarian(this.species);
  }

  isTrainable(): boolean {
    if (this.isVegetarien() && this.age < 36) {
      return true;
    }
    return !this.isVegetarien() && this.age < 12;
  }

  train(): void {
    if (this.isTrainable()) {
      this.trained = true;
    }
  }
}
