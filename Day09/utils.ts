interface MyUser {
  id: string;
  name: string;
  email?: string;
  phone?: number; // will not be tracked by UserOptionals
}

type UserOptionals = Partial<MyUser>;
// interface UserOptionals {
//   id?: string;
//   name?: string;
//   email?: string;
// }

const merge = (user: MyUser, overrides: UserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

// console.log(
//   merge(
//     { id: "lord", name: "zuko", email: "zuko@firenation.com" },
//     { id: "firelord" }
//   )
// );

// required
type UserRequired = Required<MyUser>;

// pick
type UserNameAndEmail = Pick<MyUser, "name" | "email">;

// map / record
const mapById = (users: MyUser[]): Record<string, MyUser> => {
  return users.reduce((a, v) => {
    return {
      ...a,
      [v.id]: v,
    };
  }, {});
};

console.log(mapById);
