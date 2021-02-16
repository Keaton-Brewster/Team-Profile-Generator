const inquirer = require("inquirer");
const Employee = require("./lib/Employee"),
  Engineer = require("./lib/Engineer"),
  Intern = require("./lib/Intern"),
  Manager = require("./lib/Manager"),
  { managerHTML, engineerHTML, internHTML } = require("./src/format"),
  Chalk = require("chalk"),
  Inq = require("inquirer"),
  fs = require("fs");

let employees = [];

function init() {
  Inq.prompt([
    {
      type: "input",
      message: `${Chalk.blue("What is your team managers name?")}`,
      name: "managerName",
    },
    {
      type: "input",
      message: `${Chalk.blue("What is your managers employee ID?")}`,
      name: "managerID",
    },
    {
      type: "input",
      message: `${Chalk.blue("What is your managers email address?")}`,
      name: "managerEmail",
    },
    {
      type: "input",
      message: `${Chalk.blue("What is your managers office phone number?")}`,
      name: "managerPhone",
    },
  ]).then((data) => {
    const manager = new Manager(
      data.managerName,
      data.managerID,
      data.managerEmail,
      data.managerPhone
    );
    managerHTML(manager);
    Inq.prompt([
      {
        type: "list",
        message: `${Chalk.blue("Would you like to add another employee?")}`,
        choices: ["Engineer", "Intern", "No"],
        name: "addEmployee",
      },
    ])
      .then((data) => {
        let newEmployee;

        switch (data.addEmployee) {
          case "Engineer":
            employees++;
            newEmployee = Engineer.addEngineer();
            break;
          case "Intern":
            employees++;
            newEmployee = Intern.addIntern();
            break;
          case "No":
            return;
        }
      })
      .catch((err) => {
        Error.prototype.message = "Something went wrong";
        throw new Error(`${Error.message}: ${err}`);
      });
  });
}

Inq.prompt([
  {
    type: "list",
    message: `${Chalk.blue("Hello there. Are you ready to build your team?")}`,
    choices: ["Yes", "No"],
    name: "start",
  },
]).then((response) => {
  switch (response.start) {
    case "Yes":
      init();
      break;
    case "No":
      return;
  }
});
