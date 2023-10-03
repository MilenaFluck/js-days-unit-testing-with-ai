import { Species } from '../../chapter-3-writing-good-tests/model';
import { Park } from './park-matcher';

it("should return species", () => {
  // Arrange
  const species = new Set<Species>([Species.VELOCIRAPTOR, Species.STEGOSAURUS]);
  const park = new Park(species);
  // Act
  const result = park.getSpecies();
  // Assert
  expect(result.size).toBe(2);
  // expect(result).toBe(species);
  expect(result).toEqual(species);
})

it("should match input", () => {
  const numbers = [1, 2];

  // expect(numbers).toBe([2,4]);
  expect(numbers).toEqual([1, 2]);
  expect(numbers).toEqual([1, 2, undefined]);
  expect(numbers).toStrictEqual([1, 2]);
  // expect(numbers).toStrictEqual([1, 2, undefined]);
})
