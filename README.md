# My Journey into Typescript with guidance from [Jack Herrington](https://)

I will make a record of the things I will have learnt.  
This is to better understand **typescript**, when and where to use it.

## Setup

```bash
// initialise
npm init -y

// install typescript
npm i ts-node

// initialise typescript compiler
npx tsc --init
```

### Running Files

```bash
npx ts-node [filename].ts
```

## Compiling

```bash
npx tsc [filename].ts
```

## Introduction

### Why Typescript?

- It will save you
- It will help you code faster:

### What is Typescript?

- It is a suprset of Javascript
- **Typescript** is _strictly typed_ - meaning if a variable's type is set, you can only assign values of that type to it
  - This allows catching of errors earlier on
- It helps in the enforcing of set types - this happens at compile time

- to avoid having to copy type definitions all over we use an **interface**

- does not change how you do things, just variable declarations & loops
  - in those cases, allow it to infer what the type is

> **NOTE**: Typescript enforces type checking at **compile** time and not run time

**Day 01**

### Basic Types

- typescript has the following types and this is how you specify them:

```ts
//string
let userName: string = "James";
// number
let myNumber: number = 23;
// boolean
let hasLoggedIn: boolean = false;
```

#### Arrays

```ts
// string array
let digimon: string[] = ["Agunimon", "Greymom", "Lobomon"];
// number array
let ages: number[] = [12, 24, 44];
// using generic type
let myValues: Array<number> = [1, 2, 3, 4, 5];
```

#### Objects

```ts
const monGen: {
  prenom: string;
  nom: string;
} = {
  prenom: "Jacques",
  nom: "Midzi",
};
```

#### Interface

- You don't want to go copying and pasting type definitions all over the place.
- Instead we want to define once and reuse it

```ts
interface Person {
  name: string;
  surname: string;
}

// type
type Individual = {
  firstName: string;
  lastName: string;
};
```

### Loops

- With loops, you can allow typescript to infer the types - it is smart enough to do that

```ts
for (let i = 0; i < 10; i++) {
  console.log(i); // typesript infers that the output type is a number
}
```

---

**Day 02**

### Functions

- Creating functions is exactly the same

```ts
function addNumbers(a, b) {
  return a + b;
}
// typescript does not like this
module.exports = addNumbers;
// instead we do
export default addNumbers;
```

- if you want a default value (so you can choose not to pass one), you set it in the variable declaration: `str2: string = ""`

#### Union Type

- A union type is used when you want to give a choice of the types accepted by the function or variable

```ts
let age: number | string;

export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};
```

#### Optional Chaining

- `?` : makes sure is that variable is defined before referencing it
- `??` : - null coalescing operator - if you have undefined on one side of the expression use values on the other side

```ts
export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}
```

---

**Day 03**

### Functions (cont.)

- Refer to code for this day for better illustration

#### Defining Types as function

You define your own type in instance where a function is potentially going to be used in a number of places

- Your define your own type as `type` or `interface`:

A function type is:

```ts
type MutationFunction = (v: number) => number;
```

#### Funcions returning function

```ts
// function type
export type AdderFunction = (val: number) => number;

// returning func from func
export function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}
```

---

**Day 04**

### Function Overloading

- **unknown** is any but you have to cast it before you use it - a safe any
- use `**?**` to make a parameter optional

> To be able to import from `json` files add, `resolveJsonModule: true` to `tsconfig.json`

---

**Day 05**

### Optionals

- when you want to make it such that a value has the **option** to be provided or not
  - these can be parameters:

```ts
function printUser(id: number, name: string, notes?: string);
```

- or fields

```ts
interface User {
  id: string;
  info?: {
    email?: string;
  };
}
```

- you cannot add anything after an optional

---

**Day 06**

### Tuples

- a tuple is an array
  - each item in a tuple can be named & have different types

---

**Day 07**

### Generics

- when you want the abitlity to have a type be interchangable depending on what is passed to it

#### Generics (KEYOF)

---

**Day 09**

### Utiility Types

- a generics mechanism you can use to create another type from an existing types

#### Partial

- takes a type and make everythinng in it optional

#### Required
