var cc = require("./index.js")
var log = console.log

var colours = ["black", "red", "green", "yellow", "blue", "purple", "cyan", "white"]

log("function colours, regular")
colours.map((colour) => {
	log(cc.colour(colour, colour))
})

log("function colours, bold")
colours.map((colour) => {
	log(cc.colour(colour, colour, "bold"))
})

log("function colours, underline")
colours.map((colour) => {
	log(cc.colour(colour, colour, "underline"))
})

log("function colours, intense")
colours.map((colour) => {
	log(cc.colour(colour, colour, "intense"))
})

log("function colours, intensebold")
colours.map((colour) => {
	log(cc.colour(colour, colour, "intensebold"))
})

log("function background, regular")
colours.map((colour) => {
	log(cc.background(colour, colour))
})

log("function background, intense")
colours.map((colour) => {
	log(cc.background(colour, colour, "intense"))
})