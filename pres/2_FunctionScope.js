function testScope() {
  if (true) {
    let a = "this is printed using let";
    var b = "this is printed using var";
    const c = "this is printed using const";

    console.log("Inside if block," + a);
    console.log("Inside if block," + b);
    console.log("Inside if block," + c);
  }

  console.log("Outside if block," + a);
  console.log("Outside if block," + b);
  //console.log("Outside if block," + c);
}

testScope();
