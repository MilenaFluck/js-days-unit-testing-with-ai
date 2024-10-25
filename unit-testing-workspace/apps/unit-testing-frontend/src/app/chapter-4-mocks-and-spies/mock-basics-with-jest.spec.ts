import { foodChain, movieList } from './mock-basics-with-jest';
/*** Further examples ***/

/*** The .mock-Property ***/
let mockedFunction = jest.fn(x => x + ' eats ');

/*** Das Property contains infos about the called function. ***/
it('closer look at the mock property', () => {
  console.log('The result: ', foodChain(['T-Rex', 'Triceratops', 'Trees'], mockedFunction));

  /*** Infos about the mocked function: chainUpMock ***/
  console.log('The .mock-Property: ', mockedFunction.mock);

  expect(mockedFunction.mock.calls).toHaveLength(3);
});


/*** Multiple Mock Implementations ***/
it('various implementationen of a mock function', () => {
  mockedFunction = jest
    .fn()
    .mockImplementationOnce(x => x + ' eats ')
    .mockImplementationOnce(x => x + ' loves ')
    .mockImplementationOnce(x => x + '');

  console.log('The result I: ', foodChain(['T-Rex', 'Triceratops', 'Trees'], mockedFunction));

  expect(mockedFunction.mock.calls).toHaveLength(3);
});



/*** Multiple Return-Values ***/
const mockedFunctionII = jest.fn(() => '');

it('multiple calls hintereinander mocken', () => {
  mockedFunctionII.mockReturnValueOnce('Park I').mockReturnValueOnce('Park II').mockReturnValue('World');

  /*** We call the mock 3x with the mocked function. ***/
  console.log(movieList(mockedFunctionII));
  console.log(movieList(mockedFunctionII));
  console.log(movieList(mockedFunctionII));

  expect(mockedFunctionII).toHaveBeenCalledTimes(3);

});

/*** Name the mock ***/
mockedFunctionII.mockName('getSuffix');

it('giving the mock a readable name', () => {
  movieList(mockedFunctionII);
  expect(mockedFunctionII).not.toHaveBeenCalled();
});
