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

I like colours (specifically [chalk](https://www.npmjs.com/package/chalk)) but I hate all the typing I have to do for it to work. I am working on this often and publishing a lot so make sure you update often. Leave an [issue](https://github.com/obrien66/colour-cursive/issues) if theres an issue or if you want me to add something. [Pull requests](https://github.com/obrien66/colour-cursive/pulls) are also welcome.

I have recently added xTerm colour support. I will write actual documentation soon.

```js
var cc = require("colour-cursive");

// red
cc.red("I am a red string");


// yellow
cc.yellow("I am a yellow string");


// green
cc.green("I am a green string");


// blue
cc.blue("I am a blue string");


// cyan
cc.cyan("I am a cyan string");


// magenta
cc.magenta("I am a magenta string");


// gray
cc.gray("I am a gray string");

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


//Foreground xTerm colours \\
cc.xText(string, int);

//Background xTerm colours \\
cc.xBg(string, int);


```

