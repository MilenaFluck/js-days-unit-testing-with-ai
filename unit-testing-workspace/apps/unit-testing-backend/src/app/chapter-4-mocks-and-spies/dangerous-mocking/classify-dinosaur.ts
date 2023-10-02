/*** herbivores = Pflanzenfresser ***/
/*** carnivores = Fleischfresser ***/

export namespace Classifier {

  export function classifyDinosaur(food: string): string {
    return food === 'meat' ? 'carnivores' : 'herbivores';
  }

}
