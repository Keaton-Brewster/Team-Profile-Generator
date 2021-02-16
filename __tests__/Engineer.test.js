const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  it("should be an extension of the Employee class", () => {
    const emp = new Engineer();

    expect(emp).toBeInstanceOf(Employee);
  });
  it("Should create a new instance of the Engineer class", () => {
    const emp = new Engineer();

    expect(emp).toBeInstanceOf(Engineer);
  });
  it("Should take in four arguments as details for the Engineer", () => {
    const thisName = "Keaton",
      thisID = 5,
      thisEmail = "Email",
      thisGithub = "Github Address";

    const emp = new Engineer(thisName, thisID, thisEmail, thisGithub);

    expect(emp.name).toEqual(thisName);
    expect(emp.id).toEqual(thisID);
    expect(emp.email).toEqual(thisEmail);
    expect(emp.githubUsername).toEqual(thisGithub);
  });
  describe("getName", () => {
    it("Should return the name inputted into the new employee constructor", () => {
      const emp = new Engineer("Keaton");

      expect(emp.getName()).toEqual("Keaton");
    });
  });
  describe("getId", () => {
    it("Should return the id inputted into the employee constructor", () => {
      const emp = new Engineer("NAME", 3);

      expect(emp.getId()).toEqual(3);
    });
  });
  describe("getEmail", () => {
    it("Should return the email address inputted into the employee constructor", () => {
      const emp = new Engineer("NAME", "ID", "EMAIL");

      expect(emp.getEmail()).toEqual("mailto:EMAIL");
    });
  });
  describe("getRole", () => {
    it("Should return 'Engineer' when called", () => {
      const emp = new Engineer();

      expect(emp.getRole()).toEqual("Engineer");
    });
  });
  describe("getGithub", () => {
    it("Should return the github username of the Engineer", () => {
      const emp = new Engineer("NAME", "ID", "EMAIL", "github username");

      expect(emp.getGithub()).toEqual("https://github.com/github username");
    });
  });
});
