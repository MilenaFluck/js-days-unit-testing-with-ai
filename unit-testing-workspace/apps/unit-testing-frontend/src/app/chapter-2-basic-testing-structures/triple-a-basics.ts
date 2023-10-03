import { Species } from '../chapter-3-writing-good-tests/model';

export function isSpeciesDangerous(species: Species): boolean {
  const dangerousSpecies = [ Species.VELOCIRAPTOR, Species.T_REX, Species.SPINOSAURUS ];
  return dangerousSpecies.includes(species);
}
