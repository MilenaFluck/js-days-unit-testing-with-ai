export class Dino {
  id: string;
  name: string;
  // age in months
  age: number;
  species: string;
  trained: boolean;

  constructor(id: string, name: string, age: number, species: string, trained: boolean) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.species = species;
    this.trained = trained;
  }
}
