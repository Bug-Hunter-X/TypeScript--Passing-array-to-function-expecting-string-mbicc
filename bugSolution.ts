function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Alice", "Bob"];

// Solution 1: Iterate through the array
user.forEach(name => {
  console.log(greeter(name));
});

// Solution 2: Join the array elements into a single string
let userString = user.join(", ");
console.log(greeter(userString));

// Solution 3: Type check and handle different cases
function greeterImproved(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(', ');
  }
}
console.log(greeterImproved(user));
console.log(greeterImproved("Alice"));