let myArray = [1, 2, 3, 4, 5, "Nepal"];

function arrayLength(arr) {
  count = 0;
  for (let i = 0; arr[i] !== undefined; i++) {
    count++;
  }
  console.log(count);
}

arrayLength(myArray);
