import { Species } from '../../chapter-3-writing-good-tests/model';
import { isVegetarian } from './triple-a-basics';

it("should return true if species is vegetarian", () => {
  // Arrange
  const dinosaur = Species.TRICERATOPS;
  // Act
  const result = isVegetarian(dinosaur);
  // Assert
  expect(result).toBeTruthy();
})

it("should return false if species is not vegetarian", () => {
  // Arrange
  const dinosaur = Species.T_REX;
  // Act
  const result = isVegetarian(dinosaur);
  // Assert
  expect(result).toBeFalsy();
})
