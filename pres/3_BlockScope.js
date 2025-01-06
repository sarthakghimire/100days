if (true) {
  let a = "Accessible inside scope only";
  var b = "Accessible everywhere";

  console.log(a);
  console.log(b);
}

console.log("Outside:" + b); //Accessible
console.log("Outside:" + a); //Not accessible
