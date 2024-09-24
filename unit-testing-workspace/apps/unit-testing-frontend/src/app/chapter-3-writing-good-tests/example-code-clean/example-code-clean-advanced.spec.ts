import { determineSpeciesEmergencyProcedureNextStep, evacuateVisitors, isSpeciesDangerous } from './example-code-clean';
import { Species, SpeciesEmergencyAction } from '../model';

describe('isSpeciesDangerous', () => {
  it.each([
    [Species.VELOCIRAPTOR, true],
    [Species.T_REX, true],
    [Species.SPINOSAURUS, true],
    [Species.TRICERATOPS, false],
    [Species.STEGOSAURUS, false]
  ])('when species is %s then is dangerous is %s', (status, expected) => {
    expect(isSpeciesDangerous(status))
      .toEqual(expected);
  });
});

/*** Rule 4: Keep it simple ***/
describe('evacuateVisitors', () => {
  it.each([
    [false, false, false, false],
    [false, false, true, false],
    [false, true, false, false],
    [true, false, false, false],
    [false, true, true, false],
    [true, false, true, false],
    [true, true, false, false],
    [true, true, true, true]
  ])('when park open is %s, whereabouts of species known is %s and species is dangerous is %s then evacuate visitors is %s', (parkIsOpen, whereaboutsOfEscapedSpeciesKnown, speciesIsDangerous, expected) => {
    expect(evacuateVisitors(parkIsOpen, whereaboutsOfEscapedSpeciesKnown, speciesIsDangerous))
      .toEqual(expected);
  });
});

describe('determineSpeciesEmergencyProcedureNextStep', () => {
  it.each([
    [false, 0, SpeciesEmergencyAction.SEARCH],
    [false, 1, SpeciesEmergencyAction.SEARCH],
    [true, 0, SpeciesEmergencyAction.STUN],
    [true, 1, SpeciesEmergencyAction.SHOOT],
  ])('when whereabouts of species known is %s and number of deaths is %s then the next step in emergency procedure is %s', (whereaboutsOfEscapedSpeciesKnown, deaths, expected) => {
    expect(determineSpeciesEmergencyProcedureNextStep(whereaboutsOfEscapedSpeciesKnown, deaths))
      .toEqual(expected);
  });
});
