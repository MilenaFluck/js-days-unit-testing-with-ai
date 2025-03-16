import { ZooEvacuation } from './zoo-evacuation';

describe('ZooEvacuation', () => {
  const testCases = [
    {
      name: 'should correctly evacuate animals based on priority',
      input: ["Giraffe", "Hase", "Löwe", "Hamster", "Elefant", "Löwe", "Giraffe"],
      expected: ["Löwe", "Löwe", "Elefant", "Giraffe", "Giraffe", "Hase", "Hamster"]
    },
    {
      name: 'should handle an empty list',
      input: [],
      expected: []
    },
    {
      name: 'should handle a list with only one type of animal',
      input: ["Löwe", "Löwe", "Löwe"],
      expected: ["Löwe", "Löwe", "Löwe"]
    },
    {
      name: 'should handle a list with only low-priority animals',
      input: ["Hase", "Hamster", "Meerschweinchen"],
      expected: ["Hase", "Hamster", "Meerschweinchen"]
    },
    {
      name: 'should handle duplicate animals in different orders',
      input: ["Elefant", "Löwe", "Hase", "Löwe", "Giraffe", "Elefant", "Giraffe"],
      expected: ["Löwe", "Löwe", "Elefant", "Elefant", "Giraffe", "Giraffe", "Hase"]
    },
    {
      name: 'should correctly handle an already sorted list',
      input: ["Löwe", "Löwe", "Elefant", "Giraffe", "Hase"],
      expected: ["Löwe", "Löwe", "Elefant", "Giraffe", "Hase"]
    },
    {
      name: 'should handle completely unknown animals',
      input: ["Drache", "Einhorn", "Greif"],
      expected: ["Drache", "Einhorn", "Greif"]
    }
  ];

  testCases.forEach(({ name, input, expected }) => {
    it(name, () => {
      const result = ZooEvacuation.evacuateAnimals(input);
      expect(result).toEqual(expected);
    });
  });
});
