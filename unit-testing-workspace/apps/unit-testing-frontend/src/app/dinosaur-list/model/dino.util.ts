import { Species } from '../../chapter-3-writing-good-tests/model';

export namespace DinoUtil {

  export function isHerbivore(species: Species): boolean {
    const herbivoreSpecies = [ Species.TRICERATOPS, Species.STEGOSAURUS ];
    return herbivoreSpecies.includes(species);
  }

}
