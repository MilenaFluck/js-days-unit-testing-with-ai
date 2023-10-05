import { foodChain, movieList } from './mock-basics-with-jest';
/*** Einige interessante Beispiele ***/

/*** Das .mock-Property ***/
let mockedFunction = jest.fn(x => x + ' eats ');

/*** Das Property beinhaltet Informationen über die aufgerufene Funktion. ***/
it('den mock genauer unter die Lupe geben', () => {
  console.log('Das Ergebnis: ', foodChain(['T-Rex', 'Triceratops', 'Trees'], mockedFunction));

  // Infos über die gemockte Funktion: chainUpMock
  console.log('Das .mock-Property: ', mockedFunction.mock);

  expect(mockedFunction.mock.calls).toHaveLength(3);
});


/*** Multiple Mock Implementierungen ***/
it('verschiedene Implementationen einer Funktion ansehen', () => {
  mockedFunction = jest
    .fn()
    .mockImplementationOnce(x => x + ' eats ')
    .mockImplementationOnce(x => x + ' loves ')
    .mockImplementationOnce(x => x + '');

  console.log('Das Ergebnis I: ', foodChain(['T-Rex', 'Triceratops', 'Trees'], mockedFunction));

  expect(mockedFunction.mock.calls).toHaveLength(3);
});



/*** Multiple Return-Values ***/
const mockedFunctionII = jest.fn(() => '');

it('multiple calls hintereinander mocken', () => {
  mockedFunctionII.mockReturnValueOnce('Park I').mockReturnValueOnce('Park II').mockReturnValue('World');

  /*** Wir rufen die Function nun 3x mit der gemockten Funktion auf. ***/
  console.log(movieList(mockedFunctionII));
  console.log(movieList(mockedFunctionII));
  console.log(movieList(mockedFunctionII));

  expect(mockedFunctionII).toHaveBeenCalledTimes(3);

});

/*** Den Mock benennen ***/
mockedFunctionII.mockName('getSuffix');

it('dem mock einen leserlichen Namen geben', () => {
  movieList(mockedFunctionII);
  expect(mockedFunctionII).not.toHaveBeenCalled();
});
