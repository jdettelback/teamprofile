const create_team_function = (team) => {
  const create_manager_html_function = (manager) => {
    return `
        <div class="col mb-4">
          <div class="card bg-primary h-100">
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

  const create_engineer_html_function = (engineer) => {
    return `
    <div class="col mb-4 h-100">
          <div class="card bg-primary">
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

  const create_intern_html_function = (intern) => {
    return `
<div class="col mb-4 h-100">
          <div class="card border-primary">
            <div class="card-body text-primary">
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

  const html = [];

  const managers = team.filter((employee) => employee.getRole() === "Manager");
  const managerHTML = managers.map((m) => {
    return create_manager_html_function(m);
  });

  html.push(managerHTML.join(""));

  const engineers = team.filter(
    (employee) => employee.getRole() === "Engineer"
  );
  const engineerHTML = engineers.map((m) => {
    return create_engineer_html_function(m);
  });

  html.push(engineerHTML.join(""));

  const interns = team.filter((employee) => employee.getRole() === "Intern");
  const internHTML = interns.map((m) => {
    return create_intern_html_function(m);
  });
  html.push(internHTML.join(""));

  return html.join("");
};

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
  <nav class="text-center m-3 p-4 bg-success">
    <h1>My Team Members</h1>
  </nav>
  <body>
    <main>
      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 justify-content-around m-3">

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
