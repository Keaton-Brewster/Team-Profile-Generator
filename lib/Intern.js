const Employee = require("./Employee");
const Inq = require("inquirer");
const Chalk = require("chalk");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

function addIntern() {
  Inq.prompt([
    {
      type: "input",
      message: `${Chalk.blue("What is this interns name?")}`,
      name: "internName",
    },
    {
      type: "input",
      message: `${Chalk.blue("What is this interns employee ID?")}`,
      name: "internID",
    },
    {
      type: "input",
      message: `${Chalk.blue("What is this interns email address?")}`,
      name: "internEmail",
    },
    {
      type: "input",
      message: `${Chalk.blue("Where is this intern going to school?")}`,
      name: "internSchool",
    },
  ]).then((data) => {
    const newIntern = new Intern(
      data.internName,
      data.internID,
      data.internEmail,
      data.internSchool
    );
    return newIntern;
  });
}

module.exports = {
  Intern: Intern,
  addIntern: addIntern,
};
