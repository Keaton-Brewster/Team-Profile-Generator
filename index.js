const Engineer = require("./lib/Engineer"),
  Intern = require("./lib/Intern"),
  Manager = require("./lib/Manager"),
  { managerHTML, engineerHTML, internHTML } = require("./src/employeeHTML"),
  genHTML = require("./src/html"),
  css = require("./src/css"),
  Chalk = require("chalk"),
  Inq = require("inquirer"),
  prompt = Inq.createPromptModule(),
  fs = require("fs");

let team = [];

function askForAnotherEmployee() {
  prompt([
    {
      type: "list",
      message: `${Chalk.greenBright(
        "Would you like to add another employee?"
      )}`,
      choices: ["Engineer", "Intern", new Inq.Separator(), "No (all done)"],
      name: "addEmployee",
    },
  ])
    .then((data) => {
      switch (data.addEmployee) {
        case "Engineer":
          Inq.prompt([
            {
              type: "input",
              message: `${Chalk.greenBright("What is this engineers name?")}`,
              name: "engineerName",
            },
            {
              type: "input",
              message: `${Chalk.greenBright(
                "What is this engineers employee ID?"
              )}`,
              name: "engineerID",
            },
            {
              type: "input",
              message: `${Chalk.greenBright(
                "What is this engineers email address?"
              )}`,
              name: "engineerEmail",
            },
            {
              type: "input",
              message: `${Chalk.greenBright(
                "What is this engineers Github username?"
              )}`,
              name: "engineerGithub",
            },
          ]).then((data) => {
            const newEngineer = new Engineer(
              data.engineerName,
              data.engineerID,
              data.engineerEmail,
              data.engineerGithub
            );
            team.push(engineerHTML(newEngineer));
            askForAnotherEmployee();
          });
          break;
        case "Intern":
          Inq.prompt([
            {
              type: "input",
              message: `${Chalk.greenBright("What is this interns name?")}`,
              name: "internName",
            },
            {
              type: "input",
              message: `${Chalk.greenBright(
                "What is this interns employee ID?"
              )}`,
              name: "internID",
            },
            {
              type: "input",
              message: `${Chalk.greenBright(
                "What is this interns email address?"
              )}`,
              name: "internEmail",
            },
            {
              type: "input",
              message: `${Chalk.greenBright(
                "Where is this intern going to school?"
              )}`,
              name: "internSchool",
            },
          ]).then((data) => {
            const newIntern = new Intern(
              data.internName,
              data.internID,
              data.internEmail,
              data.internSchool
            );
            team.push(internHTML(newIntern));
            askForAnotherEmployee();
          });
          break;
        case "No (all done)":
          let html = genHTML(team);
          fs.writeFileSync("./output/index.html", html);
          fs.writeFileSync("./output/main.css", css);
          return console.log(
            Chalk.cyanBright("New files created in the output folder!")
          );
      }
    })
    .catch((err) => {
      throw new Error(
        `Something got caught in the add another employee function: ${err}`
      );
    });
}

function init() {
  prompt([
    {
      message: `${Chalk.greenBright("What is your team managers name?")}`,
      name: "managerName",
    },
    {
      type: "number",
      message: `${Chalk.greenBright("What is your managers employee ID?")}`,
      name: "managerID",
    },
    {
      message: `${Chalk.greenBright("What is your managers email address?")}`,
      name: "managerEmail",
    },
    {
      type: "number",
      message: `${Chalk.greenBright("What is your managers office number?")}`,
      name: "managerOffice",
    },
  ])
    .then((data) => {
      const manager = new Manager(
        data.managerName,
        data.managerID,
        data.managerEmail,
        data.managerPhone
      );
      team.push(managerHTML(manager));

      askForAnotherEmployee();
    })
    .catch((err) => {
      Error.prototype.message = "Something got caught in the init function...";
      throw new Error(`${Error.message}: ${err}`);
    });
}

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
