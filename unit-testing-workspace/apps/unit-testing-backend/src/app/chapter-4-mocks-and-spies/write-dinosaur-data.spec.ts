import writeDinosaurData from './write-dinosaur-data';

/*** Problem 2: Tests haben ungewollte Nebenwirkungen auf das System ***/
it('should execute writeDinosaurData method', () => {
  const data = 'Brachiosaurus';
  const filename = 'brachiosaurus.txt';

  return expect(writeDinosaurData(data, filename)).resolves.toBeUndefined();
});
