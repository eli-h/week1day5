var chalk = require("chalk");

var message = "Hello " + chalk.bold.italic.red.bgYellow("World");
console.log(message);