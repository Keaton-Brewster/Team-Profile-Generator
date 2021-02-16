const Employee = require("./Employee");

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

module.exports = Engineer;