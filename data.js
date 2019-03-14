const { student, getAverage } = require('./requireIntern');

let { name, age, notes: { mathematics, english, programming }} = student;

console.log("The average of student " + name + " is " + getAverage(mathematics, english, programming));