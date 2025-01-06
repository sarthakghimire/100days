if (true) {
  let a = "Accessible inside scope only";
  var b = "Accessible everywhere";
  const run = "Hello";

  console.log(a);
  console.log(b);
  console.log(run);
}

console.log("Outside:" + b); //Accessible
console.log("Outside:" + a); //Not accessible
