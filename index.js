var chalk = require('chalk');

module.exports = {
	red: (string) => {
		return console.log(chalk.red(string))
	},
	yellow: (string) => {
		return console.log(chalk.yellow(string))
	},
	green: (string) => {
		return console.log(chalk.green(string))
	},
	blue: (string) => {
		return console.log(chalk.blue(string))
	},
	cyan: (string) => {
		return console.log(chalk.cyan(string))
	},
	magenta: (string) => {
		return console.log(chalk.magenta(string))
	},
	gray: (string) => {
		return console.log(chalk.gray(string))
	},
	inverse: (string) => {
		return console.log(chalk.inverse(string));
	},
	bg: (string, color) => {
		
		if (color == "black"){
			return console.log(chalk.bgBlack(string));
		}

		else if (color == "red"){
			return console.log(chalk.bgRed(string));
		}

		else if (color == "green"){
			return console.log(chalk.bgGreen(string));
		}

		else if (color == "yellow"){
			return console.log(chalk.bgYellow(string));
		}

		else if (color == "blue"){
			return console.log(chalk.bgBlue(string));
		}

		else if (color == "magenta"){
			return console.log(chalk.bgMagenta(string));
		}

		else if (color == "cyan"){
			return console.log(chalk.bgCyan(string));
		}

		else if (color == "white"){
			return console.log(chalk.bgWhite(string));
		}

		else {
			return console.log(chalk.red("WARNING! ") + chalk.bold(color) + " is not an available colour.");
		}

	}
}
