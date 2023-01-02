const Employee = require("./Employee");

class Manager extends Employee {
constructor(name, email, id, office) {
    super(name, email, id);
    this.office = office;
    this.role = "Manager";
  }

  getOffice() {
    return this.office;
  }

  static questions() {
    var questions = [...super.questions()];
    for (var q of questions) {
      if (q.name == "name") {
        q.message = "What is the manager's name?";
      }
    }
    return questions.concat([
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "office",
      },
    ]);
  }
}

module.exports = Manager;
