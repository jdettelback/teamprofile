const Employee = require("./Employee");

class Intern extends Employee {
 constructor(name, email, id, school) {
    super(name, email, id);
    this.schoolName = school;
    this.role = "Intern";
  }

  getSchool() {
    return this.schoolName;
  }

  static questions() {
    return super.questions().concat([
      {
        type: "input",
        message: "What school does the intern attend?",
        name: "school",
      },
    ]);
  }
}

module.exports = Intern;
