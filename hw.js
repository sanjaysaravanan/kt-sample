const sample_object = {
  name: "Sam",
  education: "UG",
  job: "developer",
  role: "engineer",
};

// Destructure
const { name, education } = sample_object;
console.log(name);
console.log(education);

// Spread
const new_object = { ...sample_object, name: "manager" };

// Rest
const { job, ...restProps } = { ...sample_object };
console.log(job);
console.log(restProps);

// diff between === ==
console.log("100" == 100); // ----> true
console.log("100" === 100); // ----> false

// var --->  , let ---> , const --->
var a = 100; // Declaring a as a global variable

// let
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1

// const
const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}

console.log(number);
// expected output: 42
