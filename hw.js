const sample_object = {
  name: "Sam",
  education: "UG",
  job: "developer",
  role: "engineer",
};

// == | ===
// var --->  , let ---> , const --->

const { name, education } = sample_object;
console.log("##### Destructure in Javascript ####");
console.log(name);
console.log(education);

// Spread
const new_object = { ...sample_object, name: "manager" };

// Rest

// Spread | Rest | Destructure | diff between === == | var --->  , let ---> , const --->
