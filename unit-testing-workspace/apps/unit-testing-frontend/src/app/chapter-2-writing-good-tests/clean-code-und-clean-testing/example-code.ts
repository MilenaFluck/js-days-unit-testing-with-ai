// enums
export enum Species {
  MONKEY = 'MONKEY',
  LION = 'LION',
  TIGER = 'TIGER',
  MOUSE = 'MOUSE',
  TURTLE = 'TURTLE'
};

export enum SpeciesEmergencyProcedure {
  SEARCH = 'SEARCH',
  STUN = 'STUN',
  SHOOT = 'SHOOT'
};


// Beispielcode dirty: Schwer zu testen
export function emergencyAction(species: Species, deaths: number, time: number,
                                openingTimes: { opens: number; closes: number },
                                whereaboutsOfEscapedSpeciesKnown: boolean): ({ evacuate: boolean } | SpeciesEmergencyProcedure)[] {
  let isDangerous;
  const zooHasVisitors = (time >= openingTimes.opens && time <= openingTimes.closes);

  switch(species) {
      case Species.MONKEY: isDangerous = true;
      case Species.TIGER: isDangerous = true;
      case Species.LION: isDangerous = true;
      default: isDangerous = false;
  }

  if (!isDangerous) {
    if (!whereaboutsOfEscapedSpeciesKnown) {
      return [{ evacuate: false }, SpeciesEmergencyProcedure.SEARCH];
    } else {
      [{ evacuate: false }, SpeciesEmergencyProcedure.STUN];
    }
  } else {
    if (deaths > 0 && whereaboutsOfEscapedSpeciesKnown) {
      if (zooHasVisitors) {
        return [{ evacuate: true }, SpeciesEmergencyProcedure.SHOOT];
      } else {
        return [{ evacuate: false }, SpeciesEmergencyProcedure.SHOOT];
      }
    } else if (isDangerous && deaths == 0 && whereaboutsOfEscapedSpeciesKnown) {
      return [{ evacuate: true }, SpeciesEmergencyProcedure.STUN];
    } else if (!whereaboutsOfEscapedSpeciesKnown) {
      if (zooHasVisitors) {
        return [{ evacuate: false }, SpeciesEmergencyProcedure.SEARCH];
      } else {
        return [{ evacuate: false }, SpeciesEmergencyProcedure.SEARCH];
      }
    }
  }

}




// Beispielcode clean
export function speciesIsDangerous(species: Species): boolean {
  const dangerousSpecies = [Species.LION, Species.MONKEY, Species.TIGER];
  return dangerousSpecies.includes(species);
}

export function zooIsOpen(time: number, openingTime: number, closingTime: number): boolean {
  return time >= openingTime && time <= closingTime
}

export function peopleDied(deaths: number): boolean {
  return deaths > 0;
}

export function evacuateVisitors(zooIsOpen: boolean, whereaboutsOfEscapedSpeciesKnown: boolean, speciesIsDangerous: boolean): boolean {
    return zooIsOpen && whereaboutsOfEscapedSpeciesKnown && speciesIsDangerous;
}

export function determineSpeciesEmergencyProcedureNextStep(whereaboutsOfEscapedSpeciesKnown: boolean, peopleDied: boolean): SpeciesEmergencyProcedure {
  if (!whereaboutsOfEscapedSpeciesKnown) {
    return SpeciesEmergencyProcedure.SEARCH;
  }
  return peopleDied ? SpeciesEmergencyProcedure.SHOOT : SpeciesEmergencyProcedure.STUN;
}
