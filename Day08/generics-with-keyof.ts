function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const cats = [
  { name: "Akira", age: 6 },
  { name: "Ash", age: 3 },
  { name: "Loki", age: 2 },
];

// console.log(pluck(cats, "age"));
// console.log(pluck(cats, "name"));

interface BaseEvent {
  time: number;
  user: string;
}
interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log(name, data);
}

sendEvent("addToCart", {
  productID: "foo",
  user: "baz",
  quantity: 1,
  time: 10,
});

sendEvent("checkout", { time: 10, user: "bob" });
