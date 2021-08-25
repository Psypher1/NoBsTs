// optional parameters
function printIngredient(quantity: string, ingredient: string, notes?: string) {
  console.log(`${quantity}: ${ingredient} - ${notes ? `${notes}` : ""}`);
}

printIngredient("1kg", "chicken breast");
printIngredient("4 cloves", "garlic", "minced would be great");

// optional fields
interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    //   if you genuinenly know better add exclamation point
    return user.info.email!;
  }
  return "";
}

function getEmailEasy(user: User): string {
  // using optional chaining
  return user?.info?.email ?? "";
}

// optional callbacks
function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log(x, y);
  // will only invoke that function if it exists
  callback?.();
}
