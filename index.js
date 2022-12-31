// TODO: Include packages needed for this application
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager.js");

const template = require("./page-template.js");

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//const generateHTML = require("./generateHTML");

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "list",
    name: "position",
    message: "What position would you like to create?",
    choices: ["Engineer", "Intern", "Finished"],
  },
];

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
    //console.log(employee1);
    //console.log(team);
    init();
  });
}

function init() {
  inquirer.prompt(questions).then((response) => {
    //console.log(response);
    if (response.position == "Engineer") {
      inquirer.prompt(Engineer.questions()).then((response) => {
        var employee1 = new Engineer(
          response.name,
          response.email,
          response.id,
          response.github
        );
        team.push(employee1);
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
        return init();
      });
    }
    if (response.position == "Finished") {
      createRoster("./dist/roster.html", template(team));
      return;
    }
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
