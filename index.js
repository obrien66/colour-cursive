var {reset, tag, regular, background, intense} = {
	reset: "\033[0;30m",
	tag: "\033[",
	regular: {
		regular: "0;",
		bold: "1;",
		underline: "4;",
		black: "30m",
		red: "31m",
		green: "32m",
		yellow: "33m",
		blue: "34m",
		purple: "35m",
		cyan: "36m",
		white: "37m"
	},

	background:{
		intense:{
			tag: "0;",
			black: "100m",
			red: "101m",
			green: "102m",
			yellow: "103m",
			blue: "104m",
			purple: "105m",
			cyan: "106m",
			white: "107m"
		},
		regular: {
			tag: "",
			black: "40m",
			red: "41m",
			green: "42m",
			yellow: "43m",
			blue: "44m",
			purple: "45m",
			cyan: "46m",
			white: "47m"
		}
	},
	intense: {
		tag: "0;",
		boldTag: "1;",
		black: "90m",
		red: "91m",
		green: "92m",
		yellow: "93m",
		blue: "94m",
		purple: "95m",
		cyan: "96m",
		white: "97m"
	}
}

var colourVal

function getColour(colour, object){
	let lowerColour = colour.toLowerCase()
	if (!object) throw new Error("You dicked yourself nick")

	try {
		object[lowerColour]
	}
	catch(err) {
		throw err
	}
}

module.exports = {
	colour: (string, colour, modify) => {
		let obj, modifier
		if (!modify || modify === "regular"){
			obj = regular
			modifier = regular.regular
		}
		else if (modify === "bold"){
			obj = regular
			modifier = regular.bold
		}
		else if (modify === "underline"){
			obj = regular
			modifier = regular.underline
		}
		else if (modify === "intense"){
			obj = intense
			modifier = intense.tag
		}
		else if (modify === "intensebold"){
			obj = intense
			modifier = intense.boldTag
		}
		else {
			obj = regular
			modifier = regular.regular
		}

		colourVal = getColour(colour, obj)
		return tag + modifier + colourVal + string
	},
	background: (string, colour, intense) => {
		var obj = (intense == "intense" ? background.intense : background.regular)
		colourVal = getColour(colour, obj)
		return tag + obj.tag + colourVal + string + reset
	}
}