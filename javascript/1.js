// const object1 = {
//   integer: 4,
//   character: "Hello",
//   float: 3.55,
//   arr: [3, "Ram", 55.5],
//   object2: { key1: 5, key2: "World", key3: 41.2 },

//   fn: function sayHi() {
//     console.log("Hi");
//   },
// };

// console.log(object1.integer);
// console.log(object1.float);
// console.log(object1.character);
// console.log(object1.object2);
// console.log(object1.object2.key2);
// console.log(object1.character + " " + object1.object2.key2);

// console.table(object1);

// myArray = [1, "Nice", null, "KTM"];
// console.log("Length of array:" + myArray.length);

// console.log(myArray.join("*"));
// myArray.push(3);
// console.log(myArray);
// myArray.pop();
// console.log(myArray);

// myArray.shift();
// console.log(myArray);

// myArray.unshift("Ramesh");
// console.log(myArray);

// console.log(myArray.concat(object1.arr));
// // slice, splice...

// array2 = [1, 2, 3, 4, 5];
// // console.log(array2.splice(2, 2, 66, 67));

let myNum = [1, 2, 3, 4, 5];
myNum.forEach((value, index, arr) => console.log(index));
myNum.some((item) => item > 2);
myNum.find((item) => item == 4);

//.................array.reduce() function.........................
let array3 = ["Ram", "Shyam", 55, "345"];
let obj3 = array3.reduce((acc, value, index) => {
  acc[`item${index}`] = value;
  return acc;
}, {});
console.log(obj3);

array12 = [1, 2, 3, 4, 5];
array34 = ["a", "b", "c"];
array56 = ["ram", "hari", ...array12, ...array34, ...array34];
console.log(array56);

//frequently used: map, foreach, filter, find
