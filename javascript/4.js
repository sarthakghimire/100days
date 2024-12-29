let a = "Hello"; //global scope

if (true) {
  let b = 5; //local scope
  const pi = 3.14; //local scope
  var c = "World"; //worst of all
}

console.log(a);
console.log(b);
console.log(pi);
console.log(c);
