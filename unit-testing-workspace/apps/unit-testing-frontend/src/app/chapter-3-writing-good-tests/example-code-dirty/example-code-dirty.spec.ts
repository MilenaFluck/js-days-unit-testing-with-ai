import { Species, SpeciesEmergencyAction } from '../model';
import { emergencyAction } from './example-code-dirty';

describe('emergencyAction', () => {

  it('should return evacuate false and species emergency action search if species is dangerous is true, ' +
    'number of deaths is 0, whereabouts of species known is false and park has visitors is either true or false', () => {
    expect(emergencyAction(Species.VELOCIRAPTOR, 0, new Date(), new Date(), new Date(), false))
    .toStrictEqual({ evacuate: false, speciesEmergencyAction: SpeciesEmergencyAction.SEARCH});
  });

  it('should return evacuate false and species emergency action search if species is dangerous is true, ' +
    'number of deaths is 0, whereabouts of species known is false and park has visitors is either true or false', () => {
    expect(emergencyAction(Species.VELOCIRAPTOR, 0, new Date(), new Date(), new Date(), false))
      .toStrictEqual({ evacuate: false, speciesEmergencyAction: SpeciesEmergencyAction.SEARCH});
  });

  /*** How many test cases are we missing? ***/

});
