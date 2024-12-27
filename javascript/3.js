// new Date();
// console.log(new Date().getDay());
// console.log(new Date().getHours());

// console.log(Math.E);
// console.log(Math.trunc(4.56));
// console.log(Math.floor(4.5));
// console.log(Math.ceil(4.5));
// console.log(Math.trunc(Math.random() * 10000));

let a = Math.floor(Math.random() * 100);
if (a % 2 == 0) {
  console.log("Heads");
} else {
  console.log("Tails");
}

function isEvenOdd(item) {
  switch (true) {
    case item % 2 == 0:
      return "Even";
      break;

    case item % 2 == 1:
      return "Odd";
      break;

    default:
      return "Invalid Input";
  }
}

let result1 = isEvenOdd(4);
console.log(result1);
let result2 = isEvenOdd(5);
console.log(result2);
let result3 = isEvenOdd("Hi");
console.log(result3);

switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid");
}

for (let i = 5; i >= 1; i--) {
  console.log(i);
}

let info = { name: "ram", age: 23, address: "ktm" };
for (key12 in info) {
  console.log(info[key12]);
}

// for..in loop
