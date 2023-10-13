import { Species, SpeciesEmergencyAction } from '../model';
import { isBefore, isAfter } from 'date-fns';

/*** Beispielcode clean: leicht zu testen ***/
export function isSpeciesDangerous(species: Species): boolean {
  const dangerousSpecies = [ Species.VELOCIRAPTOR, Species.T_REX, Species.SPINOSAURUS ];
  return dangerousSpecies.includes(species);
}

export function isParkOpen(currentDateAndTime: Date, openingToday: Date, closingToday: Date): boolean {
  return isAfter(openingToday, currentDateAndTime) && isBefore(closingToday, currentDateAndTime);
}

export function evacuateVisitors(parkIsOpen: boolean, whereaboutsOfEscapedSpeciesKnown: boolean, speciesIsDangerous: boolean): boolean {
  return parkIsOpen && whereaboutsOfEscapedSpeciesKnown && speciesIsDangerous;
}

export function determineSpeciesEmergencyProcedureNextStep(whereaboutsOfEscapedSpeciesKnown: boolean, deaths: number): SpeciesEmergencyAction {
  if (!whereaboutsOfEscapedSpeciesKnown) {
    return SpeciesEmergencyAction.SEARCH;
  }
  return deaths > 0 ? SpeciesEmergencyAction.SHOOT : SpeciesEmergencyAction.STUN;
}

/*** lines of code: 16 ***/
