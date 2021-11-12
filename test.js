//code snippet that the students will run after installing node.js

let factorial = 1;
let i = 2;
while (i < 10) {
  factorial = factorial * i;
  i++;
}
console.log(factorial);

let age = 55;

if (age >18) {
  console.log("Eligible for Moderna and Pfizer");
} else if (age >= 12 && age < 18) {
  console.log("Eligible for Pfizer only");
} else {
  console.log("Not eligible for now.");
} 

//  