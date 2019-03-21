const { student, getAverage } = require('./requireIntern');
const fs = require('fs');

let { name, age, notes: { mathematics, english, programming }} = student;

console.log("The average of student " + name + " is " + getAverage(mathematics, english, programming));

let createFile = (student) => {
	text = "The average of student " + name + " is " + getAverage(mathematics, english, programming) + "\n";
	fs.writeFile('average.txt', text, (err) => {
		if (err) throw (err);
		console.log('File created');
	})
}

createFile(student);