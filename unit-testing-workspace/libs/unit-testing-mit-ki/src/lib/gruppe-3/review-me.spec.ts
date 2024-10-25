import { determineModelEmergencyProcedureNextStep, evacuateEarth, isModelDangerous, writeModelData } from './review-me';
import * as reviewModule from './review-me';

describe('run all tests', () => {
  describe('isModelDangerous', () => {
    expect(isModelDangerous('RoBERTa')).toEqual(false);

    it('should not return false if model is dangerous', () => {
      expect(isModelDangerous('BERT')).not.toEqual(false);
      const spy = jest.spyOn(reviewModule, 'isModelDangerous');
      isModelDangerous('BERT');
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).not.toHaveBeenCalledWith('Claude');
      spy.mockRestore();
    });
  });

  it('should evacuate earth if whereabouts of escapedModel known and model is dangerous', () => {
    expect(evacuateEarth(true, true)).toBeTruthy();
  });

  describe('determineModelEmergencyProcedureNextStep', () => {
    it.each([
      [true, 0, 'stunBot'],
      [true, 100, 'shootBot'],
    ])('when whereabouts of escaped model known is %s and number of deaths is %s then emergency procedure step is %s', (whereaboutsOfEscapedSpeciesKnown, deaths, expected) => {
      expect(determineModelEmergencyProcedureNextStep(whereaboutsOfEscapedSpeciesKnown, deaths))
        .toContain(expected);
    });
  });

  it('should execute writeModelData method', () => {
    const data = 'GPT-4';
    const filename = 'model.txt';

    return expect(writeModelData(data, filename)).resolves.toBeUndefined();
  });
});
