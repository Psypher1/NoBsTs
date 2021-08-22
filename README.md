# My Journey into Typescript

I will make a record of the things I will have learnt.  
This is to better understand **typescript**, when and where to use it.

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
