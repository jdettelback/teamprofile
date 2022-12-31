const Employee = require("./Employee");

class Engineer extends Employee {
constructor(name, email, id, github) {
    super(name, email, id);
    this.github = github;
    this.role = "Engineer";
  }

  getGithub() {
    return this.github;
  }

  static questions() {
    return super.questions().concat([
      {
        type: "input",
        message: "What is the Engineer's GitHub username?",
        name: "github",
      },
    ]);
  }

}

module.exports = Engineer;
