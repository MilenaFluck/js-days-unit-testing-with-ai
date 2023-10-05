export function foodChain(species: string[], chainUp: any): string {
  const foodChain = [];
  for (let index = 0; index < species.length; index++) {
    foodChain.push((chainUp(species[index])));
  }
  return foodChain.join('');
}

export function movieList(getSuffix: any): string {
  return 'Jurassic ' + getSuffix();
}
