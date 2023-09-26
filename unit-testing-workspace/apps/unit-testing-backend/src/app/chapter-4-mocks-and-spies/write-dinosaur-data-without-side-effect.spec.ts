/*** Hinweis: Jest nutzt Hoisting. Hoisting ist das Standardverhalten, bei dem alle
 * Deklarationen vor der Codeausführung an den Anfang des Bereichs verschoben werden.***/
import writeDinosaurData from './write-dinosaur-data';
import { promises as fs } from 'fs';

/*** Lösung Schritt 1: Wir ersetzen das Modul durch einen leeren Mock. ***/
jest.mock('fs', () => {
  return {
    promises: {
      writeFile: jest.fn()
    }
  };
});

it('should execute writeDinosaurData method test 1', () => {
  const data = 'Brachiosaurus';
  const filename = 'brachiosaurus.txt';

  return expect(writeDinosaurData(data, filename)).resolves.toBeUndefined();
});

/*** Lösung Schritt 2: Ändere die Assertion. ***/
it('should execute writeDinosaurData method test 2', () => {
 const data = 'Brachiosaurus';
 const filename = 'brachiosaurus.txt';

  writeDinosaurData(data, filename);
  expect(fs.writeFile).toBeCalled();
});

/*** Hinweis: Es heißt zwar mock, handelt sich aber um eine Spy-Function. Warum? ***/
/*** Hinweis: Das können wir mit importierten Modulen und eigenen Modulen machen. ***/
