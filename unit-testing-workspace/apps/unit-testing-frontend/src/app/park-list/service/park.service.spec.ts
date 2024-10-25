/** Beispiel Unterschied der Matcher toBe, toEqual und toStrictEqual **/
import { Species } from '../../chapter-3-writing-good-tests/model';
import { ParkService } from './park.service';

it("should return species", () => {
  // Arrange
  const species = new Set<Species>([Species.VELOCIRAPTOR, Species.STEGOSAURUS]);
  const parkService = new ParkService();
  parkService.setSpecies(species);
  // Act
  const result = parkService.getSpecies();
  // Assert
  expect(result.size).toBe(2);
  // expect(result).toBe(species); // fails, da es unterschiedliche Referenzen sind
  expect(result).toEqual(species);
})

it("should match input", () => {
  const numbers = [1, 2];

  // expect(numbers).toBe([1,2]);
  expect(numbers).toEqual([1, 2]);
  expect(numbers).toEqual([1, 2, undefined]);
  expect(numbers).toStrictEqual([1, 2]);
  // expect(numbers).toStrictEqual([1, 2, undefined]);
})
