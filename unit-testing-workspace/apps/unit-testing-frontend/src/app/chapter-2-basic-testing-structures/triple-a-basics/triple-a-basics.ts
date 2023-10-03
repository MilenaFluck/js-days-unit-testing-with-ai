import { Species } from '../../chapter-3-writing-good-tests/model';

export function isVegetarian(species: Species): boolean {
  const vegetarianSpecies = [ Species.TRICERATOPS, Species.STEGOSAURUS ];
  return vegetarianSpecies.includes(species);
}
