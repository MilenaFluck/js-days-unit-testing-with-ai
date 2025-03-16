/*** Aufgabe ***/
// Zoo-Evakuierung – Der versteckte Logikfehler

/*** Story ***/
// Es ist Chaos im Zoo! Ein Erdbeben hat einige Gehege beschädigt, und Tiere sind ausgebrochen.
// Der Zoo-Manager hat dir die Aufgabe übertragen, das Evakuierungsprogramm zu schreiben.
// Du musst sicherstellen, dass die Tiere entsprechend ihrer Gefährlichkeit und Größe evakuiert werden.
// Dabei gibt es jedoch einen Fehler im Evakuierungsplan, der das Programm in bestimmten Szenarien versagen lässt.

// Die Tiere sollen wie folgt evakuiert werden:
// Löwen – hohe Priorität (sehr gefährlich).
// Elefanten – danach, mittlere Priorität (sehr groß und schwer, blockieren den Weg).
// Giraffen – niedrige Priorität (lang und können den Weg blockieren).
// Alle anderen Tiere - am Ende (ungefährlich bzw. könne sich zur Not selbst retten)

// 1. Wähle ein KI-Modell aus
// 2. Lass die KI den Fehler finden
// 3. Lass die KI die verbesserte Funktion schreiben
// 4. Schreibe mit Hilfe von KI eine Test-Suite, die absichert, dass der Evakuierungsplan auch in Zukunft zuverlässig funktioniert
// 5. Versuche die Tests zu optimieren! (F.I.R.S.T-Principles etc.)

export namespace ZooEvacuation {

  export function evacuateAnimals(animals: string[]): string[] {
    let evacuationOrder: string[] = [];

    // Tiere entsprechend ihrer Priorität evakuieren
    for (let animal of animals) {
      let priority = getAnimalPriority(animal);
      if (priority === 1) {
        evacuationOrder.unshift(animal); // Löwen immer an den Anfang setzen
      } else if (priority > 1) {
        evacuationOrder.push(animal); // Andere Tiere hinten anfügen
      }
    }

    // Ausgabe der evakuierten Tiere in der richtigen Reihenfolge
    console.log("Evakuierungsplan: ", evacuationOrder.join(', '));
    return evacuationOrder;
  }

  // Bestimmt die Priorität des Tiers
  function getAnimalPriority(animal: string): number {
    switch (animal) {
      case "Löwe":
        return 1; // Höchste Priorität
      case "Elefant":
        return 2; // Mittlere Priorität
      case "Giraffe":
        return 3; // Niedrige Priorität
      default:
        return -1; // Anderes Tier => niedrigste Priorität
    }
  }

  // Beispiel-Aufruf => Vorsicht: Hamster und Hase werden fälschlicherweise vor dem Elefanten und der Giraffe evakuiert!
  const zooAnimals: string[] = ["Giraffe", "Hase", "Löwe", "Hamster", "Elefant", "Löwe","Giraffe"];
  evacuateAnimals(zooAnimals);
}
