const Intern = require("../lib/Intern");

describe("schoolName", () => {
  it("should create an object and pass the school name as an argument assigned to a new variable", () => {
    const intern = new Intern("Joe Smith", "test", "123", "Rutgers");
    expect(intern.schoolName).toBe("Rutgers");
  });
});

describe("getRole", () => {
  it("should create an object, assign it to a new variable and return the assigned role", () => {
    const intern = new Intern("Bill Smith", "test", "678", "Rutgers");
    expect(intern.getRole()).toBe("Intern");
  });
});

describe("getSchool", () => {
  it("should create an object, assign it to a new variable and return the assigned school name", () => {
    const intern = new Intern("Bill Smith", "test", "678", "Rutgers");
    expect(intern.getSchool()).toBe("Rutgers");
  });
});
