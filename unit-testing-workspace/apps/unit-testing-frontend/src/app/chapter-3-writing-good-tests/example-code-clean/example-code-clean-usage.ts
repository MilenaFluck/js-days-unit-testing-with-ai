import { Species, SpeciesEmergencyAction } from '../model';
import {
  determineSpeciesEmergencyProcedureNextStep,
  evacuateVisitors,
  isParkOpen,
  isSpeciesDangerous
} from './example-code-clean';

const speciesDangerous = isSpeciesDangerous(Species.VELOCIRAPTOR);
const parkOpen = isParkOpen(new Date(), new Date(new Date().setHours(8)), new Date(new Date().setHours(16)));

function emergencyAction(): { evacuate: boolean, speciesEmergencyAction: SpeciesEmergencyAction } {
  return {
    evacuate: evacuateVisitors(parkOpen, true, speciesDangerous),
    speciesEmergencyAction: determineSpeciesEmergencyProcedureNextStep(true, 4)
  };
}

/*** lines of code: 8 => 24 total ***/
