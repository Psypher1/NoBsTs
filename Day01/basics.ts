/* BASIC TYPES */
let userName: string = "James";
let hasLoggedIn: boolean = false;
let myNumber: number = 23;

// regex
let myRegex: RegExp = /foo/;

// this is a bug
// hasLoggedIn += " Midzi";
userName += " Midzi";

console.log(userName);

/* ARRAYS */
const names: string[] = userName.split(" ");
// using generic types
let myValues: Array<number> = [1, 2, 3, 4, 5];

/* INTERFACE */
interface Person {
  first: string;
  last: string;
}
/* OBJECTS */
const myPerson: Person = {
  first: "James",
  last: "Midzi",
};

//  Objects as maps
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};
ids[30] = "c";

/* CONDITIONALS */
if (ids[30] === "a") {
}

/* LOOPS */
for (let i = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach((v) => console.log(v));
const out = [4, 5, 6].map((v) => `${v * 10}`);

console.log(out);
