import writeDinosaurData from './write-dinosaur-data';

/*** Problem 2: severe side effects on the system ***/
it('should execute writeDinosaurData method', () => {
  const data = 'Brachiosaurus';
  const filename = 'brachiosaurus.txt';

  return expect(writeDinosaurData(data, filename)).resolves.toBeUndefined();
});
