const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern class", () => {
  it("should be an extension of the Employee class", () => {
    const emp = new Intern();

    expect(emp).toBeInstanceOf(Employee);
  });
  it("Should create a new instance of the Intern class", () => {
    const emp = new Intern();

    expect(emp).toBeInstanceOf(Intern);
  });
  it("Should take in four arguments as details for the Intern", () => {
    const thisName = "Keaton",
      thisID = 5,
      thisEmail = "Email",
      thisSchool = "School";

    const emp = new Intern(thisName, thisID, thisEmail, thisSchool);

    expect(emp.name).toEqual(thisName);
    expect(emp.id).toEqual(thisID);
    expect(emp.email).toEqual(thisEmail);
    expect(emp.school).toEqual(thisSchool);
  });
  describe("getName", () => {
    it("Should return the name inputted into the new employee constructor", () => {
      const emp = new Intern("Keaton");

      expect(emp.getName()).toEqual("Keaton");
    });
  });
  describe("getId", () => {
    it("Should return the id inputted into the employee constructor", () => {
      const emp = new Intern("NAME", 3);

      expect(emp.getId()).toEqual(3);
    });
  });
  describe("getEmail", () => {
    it("Should return the email address inputted into the employee constructor", () => {
      const emp = new Intern("NAME", "ID", "EMAIL");

      expect(emp.getEmail()).toEqual("mailto:EMAIL");
    });
  });
  describe("getRole", () => {
    it("Should return 'Intern' when called", () => {
      const emp = new Intern();

      expect(emp.getRole()).toEqual("Intern");
    });
  });
  describe("getSchool", () => {
    it("Should return the github username of the Intern", () => {
      const emp = new Intern("NAME", "ID", "EMAIL", "SCHOOL");

      expect(emp.getSchool()).toEqual("SCHOOL");
    });
  });
});
