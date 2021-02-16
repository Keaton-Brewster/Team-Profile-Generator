const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager class", () => {
  it("should be an extension of the Employee class", () => {
    const emp = new Manager();

    expect(emp).toBeInstanceOf(Employee);
  });
  it("Should create a new instance of the Manager class", () => {
    const emp = new Manager();

    expect(emp).toBeInstanceOf(Manager);
  });
  it("Should take in four arguments as details for the Manager", () => {
    const thisName = "Keaton",
      thisID = 5,
      thisEmail = "Email",
      officeNumber = "School";

    const emp = new Manager(thisName, thisID, thisEmail, officeNumber);

    expect(emp.name).toEqual(thisName);
    expect(emp.id).toEqual(thisID);
    expect(emp.email).toEqual(thisEmail);
    expect(emp.officeNumber).toEqual(officeNumber);
  });
  describe("getName", () => {
    it("Should return the name inputted into the new employee constructor", () => {
      const emp = new Manager("Keaton");

      expect(emp.getName()).toEqual("Keaton");
    });
  });
  describe("getId", () => {
    it("Should return the id inputted into the employee constructor", () => {
      const emp = new Manager("NAME", 3);

      expect(emp.getId()).toEqual(3);
    });
  });
  describe("getEmail", () => {
    it("Should return the email address inputted into the employee constructor", () => {
      const emp = new Manager("NAME", "ID", "EMAIL");

      expect(emp.getEmail()).toEqual("mailto:EMAIL");
    });
  });
  describe("getRole", () => {
    it("Should return 'Manager' when called", () => {
      const emp = new Manager();

      expect(emp.getRole()).toEqual("Manager");
    });
  });
});
