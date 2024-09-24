import { determineSpeciesEmergencyProcedureNextStep, evacuateVisitors, isSpeciesDangerous } from './example-code-clean';
import { Species, SpeciesEmergencyAction } from '../model';

describe('isSpeciesDangerous', () => {

  it('should return false if species is not included in dangerousSpecies enum', () => {
    expect(isSpeciesDangerous(Species.TRICERATOPS)).toBeFalsy();
  });

  it('should return true if species is included in dangerousSpecies enum', () => {
    expect(isSpeciesDangerous(Species.T_REX)).toBeTruthy();
  });
});

describe('isParkOpen', () => {
  /*** should we really test this code?
   * Rule 3: Do not test code, you cannot change.
   ***/
});

describe('evacuateVisitors', () => {

  it('should return false if park is open is true, whereabout of escaped species known is true and is dangerous is false', () => {
    expect(evacuateVisitors(true, true, false)).toBeFalsy();
  });

  it('should return true if park is open is true, whereabout of escaped species known is true and is dangerous is true', () => {
    expect(evacuateVisitors(true, true, true)).toBeTruthy();
  });
});

describe('determineSpeciesEmergencyProcedureNextStep', () => {

  it('should return search if whereabout of escaped species known is false and number of death is 0', () => {
    expect(determineSpeciesEmergencyProcedureNextStep(false, 0))
      .toStrictEqual(SpeciesEmergencyAction.SEARCH);
  });

  it('should return search if whereabout of escaped species known is false and number of death is 1', () => {
    expect(determineSpeciesEmergencyProcedureNextStep(false, 1))
      .toStrictEqual(SpeciesEmergencyAction.SEARCH);
  });

  it('should return stun if whereabout of escaped species known is true and number of death is 0', () => {
    expect(determineSpeciesEmergencyProcedureNextStep(true, 0))
      .toStrictEqual(SpeciesEmergencyAction.STUN);
  });

  it('should return shoot if whereabout of escaped species known is true and number of death is 1', () => {
    expect(determineSpeciesEmergencyProcedureNextStep(true, 1))
      .toStrictEqual(SpeciesEmergencyAction.SHOOT);
  });

});
