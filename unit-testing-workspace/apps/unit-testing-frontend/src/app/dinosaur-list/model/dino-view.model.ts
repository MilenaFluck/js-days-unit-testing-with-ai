import { Species } from '../../chapter-3-writing-good-tests/model';

export interface Dino {
  id: number;
  name: string;
  // age in months
  age: number;
  species: Species;
  trained: boolean;
}
