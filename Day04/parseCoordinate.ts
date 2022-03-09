interface Coordinate {
  x: number;
  y: number;
}
/* === With the overloaded function,this is no longer needed === */
// function parseCoordinateFromObject(obj: Coordinate): Coordinate {
//   return {
//     ...obj,
//   };
// }

// function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
//   return {
//     x,
//     y,
//   };
// }

// variants of parseCoordinate
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;

// implementation
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coord[key as "x" | "y"] = parseInt(value, 10);
    });
  } else if (typeof arg1 === "object") {
    coord = {
      // because arg1 us unknown, tell ts that we want is as what we defined
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 23, y: 44 }));
console.log(parseCoordinate("x: 45,y: 76"));
// console.log(parseCoordinate(10, 20));
// console.log(parseCoordinate({ x: 34, y: 66 }));
// console.log(parseCoordinate("x:23,y:33"));
