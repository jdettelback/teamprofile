// create team function with team array passed in
const create_team_function = (team) => {
  // create the manager html function with manager object passed in as input parameter
  // - return template literal replacing name, role, id, email, office number with getXXX methods from manager object
  const create_manager_html_function = (manager) => {
    return `
        <div class="col">
          <div class="card bg-primary mb-3 h-100">
            <div class="card-body border-primary">
              <h5 class="card-title ">${manager.getName()}</h5>
              <h4>Manager</h4>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${manager.getId()}</li>
                <li class="list-group-item">${manager.getEmail()}</li>
                <li class="list-group-item">${manager.getOffice()}</li>
              </ul>
            </div>
          </div>
        </div>
        `;
  };

  // create the html function for engineers with engineer object passed in as input parameter
  // - return template literal replacing name, role, id, email, github name with getXXX methods from engineer object
  const create_engineer_html_function = (engineer) => {
    return `
    <div class="col">
          <div class="card bg-primary mb-3 h-100">
            <div class="card-body border-primary">
              <h5 class="card-title ">${engineer.getName()}</h5>
              <h4>Engineer</h4>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${engineer.getId()}</li>
                <li class="list-group-item">${engineer.getEmail()}</li>
                <li class="list-group-item">${engineer.getGithub()}</li>
              </ul>
            </div>
          </div>
        </div>
        `;
  };

  // create the html function for interns with intern object passed in as input parameter
  // - return template literal replacing name, role, id, email, school name with getXXX methods from intern object
  const create_intern_html_function = (intern) => {
    return `
<div class="col">
          <div class="card bg-primary mb-3 h-100">
            <div class="card-body border-primary">
              <h5 class="card-title ">${intern.getName()}</h5>
              <h4>Intern</h4>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${intern.getId()}</li>
                <li class="list-group-item">${intern.getEmail()}</li>
                <li class="list-group-item">${intern.getSchool()}</li>
              </ul>
            </div>
          </div>
        </div>
        `;
  };

  // create an empty employee html array to store employee html for manager, engineers, interns
  const html = [];

const managers = team.filter((employee) => employee.getRole() === "Manager");
const managerHTML = managers.map(m => {
  return create_manager_html_function(m);
})
//console.log(managerHTML);
html.push(managerHTML);

const engineers = team.filter((employee) => employee.getRole() === "Engineer");
const engineerHTML = engineers.map((m) => {
  return create_engineer_html_function(m);
});
//console.log(engineerHTML);
html.push(engineerHTML);

const interns = team.filter((employee) => employee.getRole() === "Intern");
const internHTML = interns.map((m) => {
  return create_intern_html_function(m);
});
html.push(internHTML);
//console.log(html);
     
  // make call to filter method on team array - for each employee in team array to check if the employee's role is "Manager" via the employee's get role method and assign the new manager array returned from filter method to a new variable
  // make call to map method on the new manager array to call create manager html function and assign the new manager html array returned from map method to a new variable
  // make call to join method on the new manager html array to convert it to html string and assign it to a new variable
  // push the new manager html string to the employee html array
  // option - you can use chained array methods to avoid create new variables
  //html.push();

  // make call to filter method on team array - for each employee in team array to check if the employee's role is "Engineer" via the employee's get role method and assign the new engineer array returned from filter method to a new variable
  // make call to map method on the new engineer array to call create engineer html function and assign the new engineer html array returned from map method to a new variable
  // make call to join method on the new engineer html array to convert it to html string and assign it to a new variable
  // push the new engineer html string to the employee html array
  // option - you can use chained array methods to avoid create new variables
  //html.push();

  // make call to filter method on team array - for each employee in team array to check if the employee's role is "Intern" via the employee's get role method and assign the new intern array returned from filter method to a new variable
  // make call to map method on the new intern array to call create intern html function and assign the new intern html array returned from map method to a new variable
  // make call to join method on the new intern html array to convert it to html string and assign it to a new variable
  // push the new intern html string to the employee html array
  // option - you can use chained array methods to avoid create new variables
  //html.push();

  // call join method on employee html array to convert it to html string and return it to the caller
  return html.join("");
};

// export function to generate entire page with team array passed in as input parameter from index.js
// - return template literal for entire html replacing team member html with returned value from create-team-function via template literal varaible expression
module.exports = (team) => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="Description" content="Enter your description here" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    />
    <link rel="stylesheet" href="assets/css/style.css" />
    <title>Team Profile</title>
  </head>
  <nav class="text-center m-3 bg-success">
    <h1>Team Roster</h1>
  </nav>
  <body>
    <div>
      <h1></h1>
    </div>
    <main>
      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 justify-content-evenly m-3">

  ${create_team_function(team)}

   </div>
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery..min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
  </body>
</html>
    `;
};
