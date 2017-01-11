var cc = require("./index");

// red
cc.red("Successful red string");
// yellow
cc.yellow("Successful yellow string");
// green
cc.green("Successful green string");
// blue
cc.blue("Successful blue string");
// cyan
cc.cyan("Successful cyan string");
// magenta
cc.magenta("Successful magenta string");
// gray
cc.gray("Successful gray string");

// Backgrounds \\

// background black
cc.bg("Successful black background", "black");
// background red
cc.bg("Successful red background", "red");
// background green
cc.bg("Successful green background", "green");
// background yellow
cc.bg("Successful yellow background", "yellow");
// background blue
cc.bg("Successful blue background", "blue");
// background magenta
cc.bg("Successful magenta background", "magenta");
// background cyan
cc.bg("Successful cyan background", "cyan");
// background white
cc.bg("Successful white background", "white");

//error

cc.bg("Successful error handling", "not_a_colour")