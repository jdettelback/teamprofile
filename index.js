// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "list",
    name: "position",
    message: "What position would you like to create?",
    choices: ["Engineer", "Intern", "Finished"],
  },
];

class Employee {
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
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

class Manager extends Employee {
  constructor(name, email, id, office) {
    super(name, email, id);
    this.office = office;
  }
  static questions() {
    return super.questions().concat([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "office",
      },
    ]);
  }
}

class Engineer extends Employee {
  constructor(name, email, id, github) {
    super(name, email, id);
    this.github = github;
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

class Intern extends Employee {
  constructor(name, email, id, school) {
    super(name, email, id);
    this.schoolName = school;
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

const team = [];

function start() {
  inquirer.prompt(Manager.questions()).then((response) => {
    var employee1 = new Manager(
      response.name,
      response.email,
      response.id,
      response.office
    );
    team.push(employee1);
    console.log(employee1);
    console.log(team);
    init();
  });
}

function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    if (response.position == "Engineer") {
      inquirer.prompt(Engineer.questions()).then((response) => {
        var employee1 = new Engineer(
          response.name,
          response.email,
          response.id,
          response.github
        );
        team.push(employee1);
        console.log(team);
        return init();
      });
    }
    if (response.position == "Intern") {
      inquirer.prompt(Intern.questions()).then((response) => {
        var employee1 = new Intern(
          response.name,
          response.email,
          response.id,
          response.school
        );
        
        team.push(employee1);
        console.log(team);
        return init();
      });
    }
    if (response.position == "Finished") {
      return;
    }
  });
}

// TODO: Create a function to initialize app

function initial() {
  inquirer.prompt(questions).then((response) => {
    createRoster("roster.html", generateHTML({ ...response }));
  });
}

function createRoster(roster, data) {
  fs.writeFile(
    `./${roster.toLowerCase().split(" ").join("")}.html`,
    data,
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log("Your Roster has been generated.");
    }
  );
}

function writeFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function call to initialize app
start();

//console.log(Manager.questions());
