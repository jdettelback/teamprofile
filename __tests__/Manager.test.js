const Manager = require("../lib/Manager");

describe("office number", () => {
  it("should create an object and pass the office number as an argument assigned to a new variable", () => {
    const manager = new Manager("Joe Smith", "test", "123", "B-15");
    expect(manager.office).toBe("B-15");
  });
});

describe("getRole", () => {
  it("should create an object, assign it to a new variable and return the assigned role", () => {
    const manager = new Manager("Bill Smith", "test", "678", "B-12");
    expect(manager.getRole()).toBe("Manager");
  });
});

