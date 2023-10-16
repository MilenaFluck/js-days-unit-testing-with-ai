/** AAA Beispiel **/
import { Species } from '../../chapter-3-writing-good-tests/model';
import { DinoUtil } from './dino.util';
import isHerbivore = DinoUtil.isHerbivore;

it("should return true if species is a herbivore", () => {
  // Arrange
  const dinosaur = Species.TRICERATOPS;
  // Act
  const result = isHerbivore(dinosaur);
  // Assert
  expect(result).toBeTruthy();
})

it("should return false if species is not a herbivore", () => {
  // Arrange
  const dinosaur = Species.T_REX;
  // Act
  const result = isHerbivore(dinosaur);
  // Assert
  expect(result).toBeFalsy();
})
