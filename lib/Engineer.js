const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.githubUsername = github;
  }
}

Engineer.prototype.getGithub = function () {
  return `https://github.com/${this.githubUsername}`;
};

Engineer.prototype.getRole = function () {
  return "Engineer";
};

module.exports = Engineer;
