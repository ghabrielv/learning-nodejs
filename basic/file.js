const options = {
	mathematics: {
		default: 0,
		alias: 'm'
	},
	english: {
		default: 0,
		alias: 'e'
	},
	programming: {
		demand: true,
		alias: 'p'
	}
}

const argv = require('yargs')
	.command ('average', 'Calcule the average', options).argv;

console.log(argv);
console.log('The average is ' + (argv.m + argv.e + argv.p) / 3);