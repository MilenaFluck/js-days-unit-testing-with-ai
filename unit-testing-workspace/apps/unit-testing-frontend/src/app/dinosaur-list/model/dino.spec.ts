/** Test Suites Beispiel **/
import { Species } from '../../chapter-3-writing-good-tests/model';
import { Dino } from './dino';
import { Food } from './food.enum';

describe("train", () => {
  it("should train dino", () => {
    const dino = new Dino();
    dino.age = 12;
    dino.species = Species.STEGOSAURUS;
    dino.train();
    expect(dino.trained).toBeTruthy();
  })

  it("should not train dino which is not trainable", () => {
    const dino = new Dino();
    dino.age = 12;
    dino.species = Species.VELOCIRAPTOR;
    dino.train();
    expect(dino.trained).toBeFalsy();
  })
})

describe("getFood", () => {
  it("should return milk for young dino", () => {
    const dino = new Dino();
    dino.age = 3;
    dino.species = Species.VELOCIRAPTOR;
    const result = dino.getFood();
    expect(result).toBe(Food.MILK);
  })

  it("should return meat for carnivore", () => {
    const dino = new Dino();
    dino.age = 12;
    dino.species = Species.VELOCIRAPTOR;
    const result = dino.getFood();
    expect(result).toBe(Food.MEAT);
  })

  it("should return grass for herbivore", () => {
    const dino = new Dino();
    dino.age = 12;
    dino.species = Species.STEGOSAURUS;
    const result = dino.getFood();
    expect(result).toBe(Food.GRASS);
  })
})

describe("isTrainable", () => {
  it("should return true for herbivore younger than 36 months", () => {
    const dino = new Dino();
    dino.age = 35;
    dino.species = Species.STEGOSAURUS;
    const result = dino.isTrainable();
    expect(result).toBeTruthy();
  })

  it("should return true for carnivore younger than 12 months", () => {
    const dino = new Dino();
    dino.age = 11;
    dino.species = Species.VELOCIRAPTOR;
    const result = dino.isTrainable();
    expect(result).toBeTruthy();
  })

  it("should return false for herbivore older than 36 months", () => {
    const dino = new Dino();
    dino.age = 36;
    dino.species = Species.STEGOSAURUS;
    const result = dino.isTrainable();
    expect(result).toBeFalsy();
  })

  it("should return false for carnivore older than 12 months", () => {
    const dino = new Dino();
    dino.age = 12;
    dino.species = Species.VELOCIRAPTOR;
    const result = dino.isTrainable();
    expect(result).toBeFalsy();
  })
})

/** Hooks Beispiel **/
// describe("train", () => {
//   let dino: Dino;
//
//   beforeEach(() => {
//     dino = new Dino;
//     dino.age = 12;
//   })
//
//   it("should train dino", () => {
//     dino.species = Species.STEGOSAURUS;
//     dino.train();
//     expect(dino.trained).toBeTruthy();
//   })
//
//   it("should not train dino which is not trainable", () => {
//     dino.species = Species.VELOCIRAPTOR;
//     dino.train();
//     expect(dino.trained).toBeFalsy();
//   })
// })
