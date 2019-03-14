const data = require('./requireIntern');

console.log(data.student);
console.log("The average of student is: " + data.getAverage(data.student.notes.mathematics, data.student.notes.english, data.student.notes.programming));