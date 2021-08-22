export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

// define a type - gor
export type MutationFunction = (v: number) => number;

export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

const myMutateFunc: MutationFunction = (v: number) => v * 100;

console.log(arrayMutate([1, 2, 3], (v) => v * 10));

export type AdderFunction = (val: number) => number;
// returning func from func
export function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
