var chalk = require('chalk');
// bgBlack
// bgRed
// bgGreen
// bgYellow
// bgBlue
// bgMagenta
// bgCyan
// bgWhite
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
	},
	bg: function(string, color){
		switch(color){
			case "black":
				return console.log(chalk.bgBlack(string));
				break
			case "red":
				return console.log(chalk.bgRed(string));
				break
			case "green":
				return console.log(chalk.bgGreen(string));
				break
			case "yellow":
				return console.log(chalk.bgYellow(string));
				break
			case "blue":
				return console.log(chalk.bgBlue(string));
				break
			case "magenta":
				return console.log(chalk.bgMagenta(string));
				break
			case "cyan":
				return console.log(chalk.bgCyan(string));
				break
			case "white":
				return console.log(chalk.bgWhite(string));
				break
		}
	}
}