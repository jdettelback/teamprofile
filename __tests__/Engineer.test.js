const Engineer = require("../lib/Engineer");

describe("github", () => {
  it("should create an object and pass the github user name as an argument assigned to a new variable", () => {
    const engineer = new Engineer("Joe Smith", "test", "123", "jsmith");
    expect(engineer.github).toBe("jsmith");
  });
});

describe("getGithub", () => {
  it("should create an object, assign it to a new variable and return the assigned github username", () => {
    const engineer = new Engineer("Bill Smith", "test", "678", "bsmith");
    expect(engineer.getGithub()).toBe("bsmith");
  });
});

describe("getRole", () => {
  it("should create an object, assign it to a new variable and return the assigned role", () => {
    const engineer = new Engineer("Bill Smith", "test", "678", "bsmith");
    expect(engineer.getRole()).toBe("Engineer");
  });
});
