import { Park } from './park.model';

export namespace ParkTestdaten {

  export function create(): Park {
    return {
      id: '',
      name: '',
      country: '',
      numberOfSpecies: 0
    }
  }

  export function createTestdataWithParameters(id: string, country = ''): Park {
    return {
      id,
      name: '',
      country,
      numberOfSpecies: 0
    }
  }

  export function createMany(length: number): Park[] {
    const parks = [];
    for (let i = 0; i <= length; i++) {
      parks.push(createTestdataWithParameters(i.toString()));
    }
    return parks;
  }
}
