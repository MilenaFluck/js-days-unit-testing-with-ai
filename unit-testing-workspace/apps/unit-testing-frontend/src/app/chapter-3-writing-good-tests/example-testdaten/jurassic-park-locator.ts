import { Park } from './model/park.model';

export const germany = 'Germany';

export function findAllParksInTheCountry(country: string, allParks: Park[]): Park[] {
  return allParks.filter(park => park.country === germany);
}
