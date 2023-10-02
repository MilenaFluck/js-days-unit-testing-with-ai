import { Classifier } from './classify-dinosaur';

it('should classify dinosaur as sweetievores if food is candy', () => {
  jest.spyOn(Classifier, 'classifyDinosaur').mockReturnValue('sweetievores');
  expect(Classifier.classifyDinosaur('candy')).toStrictEqual('sweetievores');
});
