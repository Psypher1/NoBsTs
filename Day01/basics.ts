/* BASIC TYPES */

// string
let userName: string = "James";
// boolean
let hasLoggedIn: boolean = false;
// number
let myNumber: number = 23;

// regex
let myRegex: RegExp = /foo/;

// this is a bug - you should not be able to append string to boolean
// hasLoggedIn += " Midzi";
userName += " Midzi";

console.log(userName);

/* ARRAYS */
const names: string[] = userName.split(" ");
// using generic types
let myValues: Array<number> = [1, 2, 3, 4, 5];

// obje
const monGen: {
  prenom: string;
  nom: string;
} = {
  prenom: "Jacques",
  nom: "Midzi",
};

/* Interface */
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

/* LOOPS  - in these cases allow it to infer*/
console.log("\nFor Loop:");
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("\nFor Each:");
[1, 2, 3].forEach((v) => console.log(v));

console.log("\nMap: ");
const out = [4, 5, 6].map((v) => `${v * 10}`);

console.log(out);
