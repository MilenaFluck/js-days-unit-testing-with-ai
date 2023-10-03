import { Species } from '../chapter-3-writing-good-tests/model';
import { isSpeciesDangerous } from './triple-a-basics';

it("should return true if species is dangerous", () => {
  // Arrange
  const dinosaur = Species.T_REX;
  // Act
  const isDangerous = isSpeciesDangerous(dinosaur);
  // Assert
  expect(isDangerous).toBeTruthy();
})

it("should return false if species is not dangerous", () => {
  // Arrange
  const dinosaur = Species.STEGOSAURUS;
  // Act
  const isDangerous = isSpeciesDangerous(dinosaur);
  // Assert
  expect(isDangerous).toBeFalsy();
})
