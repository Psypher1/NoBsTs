import houses from "./houses";

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

function findHouses(houses: string): HouseWithID[];
function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(
  houses: House[],
  filter: (house: House) => boolean
): HouseWithID[];

// the function
function findHouses(
  houses: string | House[],
  filter?: (house: House) => boolean
): HouseWithID[] {
  /* Gave a type error */
  // if (typeof houses === "string") {
  //   JSON.parse(houses);
  // } else {
  //   houses;
  // }
  // let idHouses: HouseWithID[] = (houses as House[]).map((newHouse) => ({
  //   id: 0,
  //   ...newHouse,
  // }));

  // if (filter) idHouses = idHouses.filter(filter);

  // return idHouses;
  const maisons: House[] =
    typeof houses === "string" ? JSON.parse(houses) : houses;
  return (filter ? maisons.filter(filter) : maisons).map((house) => ({
    id: maisons.indexOf(house),
    ...house,
  }));
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
