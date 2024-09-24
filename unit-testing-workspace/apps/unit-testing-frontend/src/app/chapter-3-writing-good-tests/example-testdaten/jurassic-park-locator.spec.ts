import { findAllParksInTheCountry, germany } from './jurassic-park-locator';
import { ParkTestdaten } from './model/park.testdaten';
import { Park } from './model/park.model';

describe('findAllParksInTheCountry', () => {

  /*** Option 1: Create testdata from scratch and individually ***/
  it('should return all parks located in Germany I', () => {

    const allParks: Park[] = [
      {
        id: '1',
        name: '',
        country: germany,
        numberOfSpecies: 0
      },
      {
        id: '2',
        name: '',
        country: germany,
        numberOfSpecies: 0
      },
      {
        id: '3',
        name: '',
        country: 'USA',
        numberOfSpecies: 0
      }
    ];

    expect(findAllParksInTheCountry(germany, allParks)).toStrictEqual([allParks[0], allParks[1]]);
  });

  /*** Option 2: Create one object manually and overwrite attributes according to use case ***/
  it('should return all parks located in Germany II', () => {

    const park1 = ParkTestdaten.create();
    park1.id = '1';
    park1.country = germany;

    const park2 = ParkTestdaten.create();
    park2.id = '2';
    park2.country = germany;

    const park3 = ParkTestdaten.create();
    park3.id = '3';
    park3.country = 'USA';

    expect(findAllParksInTheCountry(germany, [park1, park2, park3])).toStrictEqual([park1, park2]);
  });

  /*** Option 3: Create many object and overwrite according to use case ***/
  it('should return all parks located in Germany III', () => {
    const parks = ParkTestdaten.createMany(3);
    parks[0].country = germany;
    parks[1].country = germany;
    parks[2].country = 'USA';
    expect(findAllParksInTheCountry(germany, parks)).toStrictEqual([parks[0], parks[1]]);
  });

  /*** Option 4: Create each object bay passing parameters to a create-function ***/
  it('should return all parks located in Germany IV', () => {
    const parks = [
      ParkTestdaten.createTestdataWithParameters('1', germany),
      ParkTestdaten.createTestdataWithParameters('2', germany),
      ParkTestdaten.createTestdataWithParameters('3', 'USA')
    ];
    expect(findAllParksInTheCountry(germany, parks)).toStrictEqual([parks[0], parks[1]]);
  });

});
