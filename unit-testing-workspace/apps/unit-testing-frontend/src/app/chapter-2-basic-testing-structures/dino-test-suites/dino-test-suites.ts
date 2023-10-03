import { Species } from '../../chapter-3-writing-good-tests/model';
import { isVegetarian } from '../triple-a-basics/triple-a-basics';
import { Food } from './food.enum';

export class Dino {
  name: string;
  // age in months
  age: number;
  species: Species

  constructor(name: string, age: number, species: Species) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  getFood(): Food {
    if (this.age < 6) {
      return Food.MILK;
    }
    return this.isVegetarien() ? Food.GRASS : Food.MEAT;
  }

  isTrainable(): boolean {
    if (this.isVegetarien() && this.age < 36) {
        return true;
    }
    return !this.isVegetarien() && this.age < 12;
  }

  isVegetarien(): boolean {
    return isVegetarian(this.species);
  }

}
