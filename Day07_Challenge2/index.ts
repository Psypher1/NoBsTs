/* Create forEach filter*/

// foreach
function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
  items.reduce((a, v) => {
    forEachFunc(v);
    return undefined;
  }, undefined);
}

myForEach(["a", "b", "c"], (v) => console.log(`ForEach ${v}`));

// filter
function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
  return items.reduce((a, v) => (filterFunc(v) ? [...a, v] : a), [] as T[]);
}

console.log(myFilter([1, 2, 3, 4, 5, 6], (v) => v % 2 === 0));

// map
function myMap<T, K>(values: T[], mapFunc: (v: T) => K): K[] {
  return values.reduce((a, v) => [...a, mapFunc(v)], [] as K[]);
}

const preMapped = [1, 2, 3];
const mapped = myMap(preMapped, (v) => (v * 10).toString());

console.log(mapped);
