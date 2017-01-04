var chalk = require('chalk');

module.exports = {
	red: function(string) {
		return console.log(chalk.red(string))
	},
	yellow: function(string) {
		return console.log(chalk.yellow(string))
	},
	green: function(string) {
		return console.log(chalk.green(string))
	},
	blue: function(string) {
		return console.log(chalk.blue(string))
	},
	cyan: function(string) {
		return console.log(chalk.cyan(string))
	},
	magenta: function(string) {
		return console.log(chalk.magenta(string))
	},
	gray: function(string) {
		return console.log(chalk.gray(string))
	}
}