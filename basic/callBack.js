console.log('Hello world');

let average = (value_one, value_two, value_three, callback) => {
	setTimeout(function(){
		let result = (value_one + value_two + value_three) / 3;
		callback(result);
	}, 2000);
}

average(5, 4, 5, function(result) {
	console.log("The average is: " + result);
})
