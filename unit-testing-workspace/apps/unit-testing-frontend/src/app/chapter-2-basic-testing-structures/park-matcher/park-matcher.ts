import { Species } from '../../chapter-3-writing-good-tests/model';

export class Park {

  private speciesList = new Set<Species>();

  constructor(species: Set<Species>) {
    this.speciesList = species;
  }

  getSpecies(): Set<Species> {
    return new Set<Species>(this.speciesList);
  }
}
