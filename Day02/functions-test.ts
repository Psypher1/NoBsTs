import addNumbers, {
  addStrings,
  format,
  printFormat,
  getName,
} from "./functions";

console.log(addNumbers(1, 2));

console.log(addStrings("james", "midzi"));
console.log(addStrings("james"));
console.log(format("james", 34));

console.log(getName({ first: "james", last: "midzi" }));
