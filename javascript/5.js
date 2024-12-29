//callback
//asynchronous functions
//promise

const test = (greet, cb) => {
  console.log("Hello");
  cb();
};
const userFun = () => {
  console.log("User OK");
};
test("Hello", userFun);
