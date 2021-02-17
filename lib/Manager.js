const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, number) {
    super(name, id, email);
    this.officeNumber = number;
  }
}

Manager.prototype.getRole = function () {
  return "Manager";
};

module.exports = Manager;
