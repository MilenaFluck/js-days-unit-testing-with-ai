export namespace ZooEvacuation {

  // Main function to evacuate animals, considering their priority
  export function evacuateAnimals(animals: string[]): string[] {
    const groupedAnimals = groupAnimalsByPriority(animals);

    // Directly combine the grouped arrays in the correct evacuation order
    const evacuationOrder = [
      ...groupedAnimals.lions,
      ...groupedAnimals.elephants,
      ...groupedAnimals.giraffes,
      ...groupedAnimals.others
    ];

    // Log the evacuation order
    console.log("Evakuierungsplan: ", evacuationOrder.join(', '));

    return evacuationOrder;
  }

  // Group animals by their priority level
  function groupAnimalsByPriority(animals: string[]): { lions: string[], elephants: string[], giraffes: string[], others: string[] } {
    let lions: string[] = [];
    let elephants: string[] = [];
    let giraffes: string[] = [];
    let others: string[] = [];

    for (let animal of animals) {
      const priority = getAnimalPriority(animal);
      switch (priority) {
        case 1:
          lions.push(animal);
          break;
        case 2:
          elephants.push(animal);
          break;
        case 3:
          giraffes.push(animal);
          break;
        default:
          others.push(animal);
          break;
      }
    }

    return { lions, elephants, giraffes, others };
  }

  // Determines the priority level of an animal
  function getAnimalPriority(animal: string): number {
    switch (animal) {
      case "Löwe":
        return 1; // Highest priority (dangerous)
      case "Elefant":
        return 2; // Medium priority (large, blocks the way)
      case "Giraffe":
        return 3; // Lower priority (long, can block the way)
      default:
        return 4; // Other animals have the lowest priority (harmless)
    }
  }

  // Example call
  const zooAnimals: string[] = ["Giraffe", "Hase", "Hamster", "Elefant", "Löwe", "Giraffe"];
  evacuateAnimals(zooAnimals);
}
