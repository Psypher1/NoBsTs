function addNumbers(a: number, b: number): number {
  return a + b;
}
export default addNumbers;

export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;

//  Union Type |
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

// function that does not return anything - void
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

//  that returns a promise
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from: ${url}`);

// multiple arguments to an array
function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}
// optional chaining operator ? makes sure is defined before referencing it - will return undefined
//  null coalescing operator ?? - will input a defualt value
