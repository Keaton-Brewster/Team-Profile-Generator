const Employee = require("./Employee");
const Inq = require("inquirer");
const Chalk = require("chalk");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.githubUsername = github;
  }
  getGithub() {
    return this.githubUsername;
  }
  getRole() {
    return "Engineer";
  }
}
function addEngineer() {
  Inq.prompt([
    {
      type: "input",
      message: `${Chalk.blue("What is this engineers name?")}`,
      name: "engineerName",
    },
    {
      type: "input",
      message: `${Chalk.blue("What is this engineers employee ID?")}`,
      name: "engineerID",
    },
    {
      type: "input",
      message: `${Chalk.blue("What is this engineers email address?")}`,
      name: "engineerEmail",
    },
    {
      type: "input",
      message: `${Chalk.blue("What is this engineers Github username?")}`,
      name: "engineerGithub",
    },
  ]).then((data) => {
    const newEngineer = new Engineer(
      data.engineerName,
      data.engineerID,
      data.engineerEmail,
      data.engineerGithub
    );
    return newEngineer;
  });
}

module.exports = {
  Engineer: Engineer,
  addEngineer: addEngineer,
};
