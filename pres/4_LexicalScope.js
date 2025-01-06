function outer() {
  let outerMessage = "Children function can print this";
  function inner() {
    console.log(outerMessage);
  }
  inner();
}
outer();
