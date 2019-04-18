let student = {
	name: "Juan",
	age: 25,
	notes: {
		mathematics : 3,
		english: 4,
		programming: 5
	}
};

let getAverage = (one, two, three) => ((one + two + three) / 3);

module.exports = {
	student,
	getAverage
};