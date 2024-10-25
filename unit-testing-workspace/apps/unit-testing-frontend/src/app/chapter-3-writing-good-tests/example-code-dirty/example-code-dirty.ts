import { Species, SpeciesEmergencyAction } from '../model';
import { isBefore, isAfter } from 'date-fns';

/*** Example code dirty: Hard to test ***/
export function emergencyAction(species: Species, deaths: number, currentDateAndTime: Date,
                                openingToday: Date, closingToday: Date,
                                whereaboutsOfEscapedSpeciesKnown: boolean): { evacuate: boolean, speciesEmergencyAction: SpeciesEmergencyAction } {
  let isDangerous;
  const parkHasVisitors = isAfter(openingToday, currentDateAndTime) && isBefore(closingToday, currentDateAndTime);

  switch(species) {
      case Species.VELOCIRAPTOR:
        isDangerous = true;
        break;
      case Species.T_REX:
        isDangerous = true;
        break;
      case Species.SPINOSAURUS:
        isDangerous = true;
        break;
      default: isDangerous = false;
  }

  if (!isDangerous) {
    if (!whereaboutsOfEscapedSpeciesKnown) {
      return { evacuate: false, speciesEmergencyAction: SpeciesEmergencyAction.SEARCH};
    } else {
      return { evacuate: false, speciesEmergencyAction: SpeciesEmergencyAction.STUN};
    }
  } else {
    if (deaths > 0 && whereaboutsOfEscapedSpeciesKnown) {
      if (parkHasVisitors) {
        return { evacuate: true, speciesEmergencyAction: SpeciesEmergencyAction.SHOOT};
      } else {
        return { evacuate: false, speciesEmergencyAction: SpeciesEmergencyAction.SHOOT};
      }
    } else if (deaths == 0 && whereaboutsOfEscapedSpeciesKnown) {
      if (parkHasVisitors) {
        return { evacuate: true, speciesEmergencyAction: SpeciesEmergencyAction.STUN};
      } else {
        return { evacuate: false, speciesEmergencyAction: SpeciesEmergencyAction.STUN};
      }
    } else {
        return { evacuate: false, speciesEmergencyAction: SpeciesEmergencyAction.SEARCH};
    }
  }

}

/*** lines of code: 40 ***/
