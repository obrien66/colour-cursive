const clc = require('cli-color');

module.exports = {
	red: (string) => {
		return console.log(clc.red(string))
	},
	yellow: (string) => {
		return console.log(clc.yellow(string))
	},
	green: (string) => {
		return console.log(clc.green(string))
	},
	blue: (string) => {
		return console.log(clc.blue(string))
	},
	cyan: (string) => {
		return console.log(clc.cyan(string))
	},
	magenta: (string) => {
		return console.log(clc.magenta(string))
	},
	gray: (string) => {
		return console.log(clc.blackBright(string))
	},
	bg: (string, color) => {

		switch(color){

		case "black":
			return console.log(clc.bgBlack(string));
		case "red":
			return console.log(clc.bgRed(string));
		case "green":
			return console.log(clc.bgGreen(string));
		case "yellow":
			return console.log(clc.bgYellow(string));
		case "blue":
			return console.log(clc.bgBlue(string));
		case "magenta":
			return console.log(clc.bgMagenta(string));
		case "cyan":
			return console.log(clc.bgCyan(string));
		case "white":
			return console.log(clc.bgWhite(string));

			throw new Error(`${color} is not an available colour.`)
		}

	},
	xText: (string, color) => {
		if (color > 255 || color < 0){
			throw new Error(`${color} is not an available colour.`)
		}
		else if (typeof color != "number") {
			throw new Error("'color' argument must be an integer between 0 and 255")
		}
		else {
			let msg = clc.xterm(color);
			console.log(msg(string));
		}
	},
	xBg: (string, color) => {
		if (color > 255 || color < 0){
			throw new Error(` ${color} is either too large or too small.`)
		}
		else if (typeof color != "number") {
			throw new Error(`the color argument must be an integer between 0 and 255. Not ${typeof color}.`)
		}
		else {
			let msg = clc.bgXterm(color);
			console.log(msg(string));
		}
	},
	underline: (string) => {
		let message = clc.underline(string)
		console.log(message);
	}
}