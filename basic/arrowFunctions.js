console.log('Hello world');

function average_one(value_one, value_two, value_three) {
	let result = (value_one + value_two + value_three) / 3;
	console.log("The average is: " + result);
}

let average_two = (value_one, value_two, value_three) => {
	let result = (value_one + value_two + value_three) / 3;
	console.log("The average is: " + result);
}

let average_three = (value_one, value_two, value_three) => console.log("The average is: " + ((value_one + value_two + value_three) / 3));

average_one(3, 4, 5);
average_two(1, 2, 1);
average_three(5, 4, 5);
