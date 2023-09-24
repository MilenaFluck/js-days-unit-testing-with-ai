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
                                openingTimes: { opens: number; closes: number }, whereaboutsofEscapedSpeciesKnown: boolean): string | string[] {
  let isDangerous;
  const zooHasVisitors = (time >= openingTimes.opens && time <= openingTimes.closes);

  switch(species) {
      case Species.MONKEY: isDangerous = true;
      case Species.TIGER: isDangerous = true;
      case Species.LION: isDangerous = true;
      default: isDangerous = false;
  }

  if (!isDangerous) {
    if (!whereaboutsofEscapedSpeciesKnown) {
      return SpeciesEmergencyProcedure.SEARCH;
    } else {
      SpeciesEmergencyProcedure.STUN;
    }
  } else {
    if (deaths > 0 && whereaboutsofEscapedSpeciesKnown) {
      if (zooHasVisitors) {
        return ['evacuate', SpeciesEmergencyProcedure.SHOOT];
      } else {
        return SpeciesEmergencyProcedure.SHOOT;
      }
    } else if ((isDangerous || !isDangerous) && deaths == 0 && whereaboutsofEscapedSpeciesKnown) {
      return ['evacuate', SpeciesEmergencyProcedure.STUN];
    } else if (!whereaboutsofEscapedSpeciesKnown) {
      if (zooHasVisitors) {
        return SpeciesEmergencyProcedure.SEARCH;
      } else {
        return SpeciesEmergencyProcedure.SEARCH;
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

export function evacuateVisitors(zooIsOpen: boolean, whereaboutsofEscapedSpeciesKnown: boolean, speciesIsDangerous: boolean): boolean {
    return zooIsOpen && whereaboutsofEscapedSpeciesKnown && speciesIsDangerous;
}

export function determineSpeciesEmergencyProcedureNextStep(whereaboutsofEscapedSpeciesKnown: boolean, peopleDied: boolean): SpeciesEmergencyProcedure {
  if (!whereaboutsofEscapedSpeciesKnown) {
    return SpeciesEmergencyProcedure.SEARCH;
  }
  return peopleDied ? SpeciesEmergencyProcedure.SHOOT : SpeciesEmergencyProcedure.STUN;
}
