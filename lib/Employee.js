class Employee {
 constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.role = 'Employee';
  }

    getRole() {
      return this.role;
    }

    getId() {
      return this.id;
    }

    getEmail() {
      return this.email;
    }

    getName() {
      return this.name;
    }

  static questions() {
    return [
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's ID number?",
      },
    ];
  }
}

module.exports = Employee;
