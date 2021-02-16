const inquirer = require("inquirer");
const Chalk = require("chalk");
const init = require("./src/prompts");


const prompt = inquirer.createPromptModule();

// This bit is what will run when you enter 'node index.js' into the command line,
//  and from there the rest of the application gets launched
prompt([
  {
    type: "list",
    message: `${Chalk.greenBright(
      "Hello there. Are you ready to build your team?"
    )}`,
    choices: ["Yes", "No"],
    name: "start",
  },
]).then((response) => {
  switch (response.start) {
    case "Yes":
      init();
      break;
    case "No":
      return console.log(Chalk.redBright("Why are you wasting our time?"));
  }
});
