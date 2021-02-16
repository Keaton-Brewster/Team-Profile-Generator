const Employee = require("../lib/Employee");

describe("Employee class", () => {
  it("Should create a new object", () => {
    let emp = new Employee();

    expect(emp).toBeInstanceOf(Employee);
  });
  it("Should accept three arguments: name, id, and email and store those as the properties of the new objetct", () => {
    const thisName = "Keaton";
    const thisID = 3;
    const thisEmail = "Keaton.brewster@gmail.com";

    const emp = new Employee(thisName, thisID, thisEmail);

    expect(emp.name).toEqual(thisName);
    expect(emp.id).toEqual(thisID);
    expect(emp.email).toEqual(thisEmail);
  });
  describe("getName", () => {
    it("Should return the name inputted into the new employee constructor", () => {
      const emp = new Employee("Keaton");

      expect(emp.getName()).toEqual("Keaton");
    });
  });
  describe("getId", () => {
    it("Should return the id inputted into the employee constructor", () => {
      const emp = new Employee("NAME", 3);

      expect(emp.getId()).toEqual(3);
    });
  });
  describe("getEmail", () => {
    it("Should return the email address inputted into the employee constructor", () => {
      const emp = new Employee("NAME", "ID", "EMAIL");

      expect(emp.getEmail()).toEqual("mailto:EMAIL");
    });
  });
  describe("getRole", () => {
    it("Should return 'Employee' when called", () => {
      const emp = new Employee();

      expect(emp.getRole()).toEqual("Employee");
    });
  });
});
