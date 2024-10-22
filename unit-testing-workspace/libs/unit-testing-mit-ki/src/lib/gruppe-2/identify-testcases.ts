/*** Dies ist schwierig zu lesender Beispielcode. Leider haben wir oft Code der schwer zu lesen ist. Noch schwieriger ist es ihn zu testen ohne ihn zu refactoren.
 Heute werden wir ihn jedoch nicht refactored, sondern einen künstlichen Agenten deiner Wahl erst alle kritischen
 Testfälle finden lassen und ihn anschließend einen Test zu jedem Testfall schreiben lassen. ***/

export function robotInvasionEmergencyAction(model: string, deaths: number, currentDateAndTime: Date,
                                numberOfHumans: number, numberOfBots: number,
                                whereaboutsOfEscapedModelKnown: boolean): { evacuatePlanetEarth: boolean, modelEmergencyAction: string } {
  let isDangerous;
  const earthFullyInvaded = numberOfHumans < numberOfBots;

  switch(model) {
    case 'Claude':
      isDangerous = true;
      break;
    case 'BERT':
      isDangerous = true;
      break;
    case 'GPT':
      isDangerous = true;
      break;
    default: isDangerous = false;
  }

  if (!isDangerous) {
    if (!whereaboutsOfEscapedModelKnown) {
      return { evacuatePlanetEarth: false, modelEmergencyAction: 'search'};
    } else {
      return { evacuatePlanetEarth: false, modelEmergencyAction: 'stun'};
    }
  } else {
    if (deaths > 0 && whereaboutsOfEscapedModelKnown) {
      if (earthFullyInvaded) {
        return { evacuatePlanetEarth: true, modelEmergencyAction: 'shoot'};
      } else {
        return { evacuatePlanetEarth: false, modelEmergencyAction: 'shoot'};
      }
    } else if (deaths == 0 && whereaboutsOfEscapedModelKnown) {
      if (earthFullyInvaded) {
        return { evacuatePlanetEarth: true, modelEmergencyAction: 'stun'};
      } else {
        return { evacuatePlanetEarth: false, modelEmergencyAction: 'stun'};
      }
    } else {
      return { evacuatePlanetEarth: false, modelEmergencyAction: 'search'};
    }
  }

}
