# colour-cursive

[![NPM](https://nodei.co/npm/colour-cursive.png?downloads=true)](https://nodei.co/npm/colour-cursive/)

Install locally
```
npm install colour-cursive
```
or globally
```
npm install colour-cursive -g
```



I like colours (specifically [chalk](https://www.npmjs.com/package/chalk)) but I hate all the typing I have to do for it to work. Also I really wanted to learn how to make packages and this seems like a fun way to do that.

```js
var cc = require("colour-cursive");

// red
cc.red("I am a red string");
// is the same as 
console.log(chalk.red("I am a red string"));


// yellow
cc.yellow("I am a yellow string");
// is the same as 
console.log(chalk.yellow("I am a yellow string"));


// green
cc.green("I am a green string");
// is the same as 
console.log(chalk.green("I am a green string"));


// blue
cc.blue("I am a blue string");
// is the same as 
console.log(chalk.blue("I am a blue string"));


// cyan
cc.cyan("I am a cyan string");
// is the same as 
console.log(chalk.cyan("I am a cyan string"));


// magenta
cc.magenta("I am a magenta string");
// is the same as 
console.log(chalk.magenta("I am a magenta string"));


// gray
cc.gray("I am a gray string");
// is the same as 
console.log(chalk.gray("I am a gray string"));

// Backgrounds \\

// background black
cc.bg("I have a black background", "black");

// background red
cc.bg("I have a red background", "red");

// background green
cc.bg("I have a green background", "green");

// background yellow
cc.bg("I have a yellow background", "yellow");

// background blue
cc.bg("I have a blue background", "blue");

// background magenta
cc.bg("I have a magenta background", "magenta");

// background cyan
cc.bg("I have a cyan background", "cyan");

// background white
cc.bg("I have a white background", "white");


```

