let a = "Hello";

if (true) {
  let b = 5;
  const pi = 3.14;
  var c = "World";
}

console.log(a); //won't create any problem
console.log(b); //creates problem
console.log(pi); //creates problem
console.log(c); //creates bigger problem
