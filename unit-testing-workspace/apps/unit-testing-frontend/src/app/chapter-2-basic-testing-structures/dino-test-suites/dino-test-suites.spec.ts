import { Species } from '../../chapter-3-writing-good-tests/model';
import { Dino } from './dino-test-suites';
import { Food } from './food.enum';

describe("getFood", () => {
  it("should return milk for young dino", () => {
    const dino = new Dino("Little Blue", 3, Species.VELOCIRAPTOR);
    const result = dino.getFood();
    expect(result).toBe(Food.MILK);
  })

  it("should return meat for carnivore", () => {
    const dino = new Dino("Blue", 12, Species.VELOCIRAPTOR);
    const result = dino.getFood();
    expect(result).toBe(Food.MEAT);
  })

  it("should return meat for plant eaters", () => {
    const dino = new Dino("Stego", 12, Species.STEGOSAURUS);
    const result = dino.getFood();
    expect(result).toBe(Food.GRASS);
  })
})

describe("isTrainable", () => {
  it("should return true for plant eater younger than 36 months", () => {
    const dino = new Dino("Little Stego", 35, Species.STEGOSAURUS);
    const result = dino.isTrainable();
    expect(result).toBeTruthy();
  })

  it("should return true for carnivore younger than 12 months", () => {
    const dino = new Dino("Little Blue", 11, Species.VELOCIRAPTOR);
    const result = dino.isTrainable();
    expect(result).toBeTruthy();
  })

  it("should return false for plant eater older than 36 months", () => {
    const dino = new Dino("Little Stego", 36, Species.STEGOSAURUS);
    const result = dino.isTrainable();
    expect(result).toBeFalsy();
  })

  it("should return false for carnivore older than 12 months", () => {
    const dino = new Dino("Little Blue", 12, Species.VELOCIRAPTOR);
    const result = dino.isTrainable();
    expect(result).toBeFalsy();
  })
})
