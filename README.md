# My Journey into Typescript

I will make a record of the things I will have learnt.  
This is to better understand **typescript**, when and where to use it.

## Setup

`npm init -y`
`npm i ts-node`
`npx tsc --init`

## running files

`npx ts-node [filename].ts`

## compiling

`npx tsc [filename].ts`

## Notes

- **Typescript** is _strictly typed_ - meaning if a variable's type is set, you can only assign values of that type to it
  - This allows catching of errors earlier on
- It helps in the enforcing of set types - this happens at compile time

- to avoid having to copy type definitions all over we use an **inerface**

- does not change how you do things, just variable declarations & loops
  - in those cases, allow it to infer what the type is

### Types

typescript has the following basic types:

- string
- number (both whole and decimal)
- boolean

### Functions

- if you want a default value (so you can choose not to pass one), you set it in the variable declaration: `str2: string = ""`
- A union type is used when you want to give a choice of the types accepted by the function

Typescript must be compiled to javascript

#### Defining Your Own Types

You define your own type in instance where a function is potentially going to be used in a number of places

unlike an interface:

```ts
interface Person {
  first: string;
  last: string;
}
```

a type is:

```ts
type MutationFunction = (v: number) => number;
```

#### Funcions returning function

_refer to Day 3 code_

#### Function Overloading

- **unknown** is any but you have to cast it - a safe any
- use `**?**` to make a parameter optional

- adding `resolveJsonModule: true` to tsconfig will allow importing from json files

### Optionals

- when you want to make it such that a valued has the option to be provided or not
- you cannot add anything after an optional

### Tuples - Day 06

- a tuple is an array
  - each item in a tuple can be named & have different types

# Generics - Day 07
