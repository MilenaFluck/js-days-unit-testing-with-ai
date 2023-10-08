import { Injectable } from '@angular/core';
import { Species } from '../../chapter-3-writing-good-tests/model';

@Injectable({
  providedIn: 'root'
})
export class ParkService {

  private speciesList = new Set<Species>();

  setSpecies(species: Set<Species>) {
    this.speciesList = species;
  }

  getSpecies(): Set<Species> {
    return new Set<Species>(this.speciesList);
  }

  getSpeciesById(id: number): Species[] {
    if (id == 2) {
      return [Species.STEGOSAURUS, Species.SPINOSAURUS, Species.VELOCIRAPTOR, Species.TRICERATOPS, Species.T_REX];
    }
    return [];
  }
}
