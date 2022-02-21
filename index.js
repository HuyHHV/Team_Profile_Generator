
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
fs = require('fs');
inquirer = require('inquirer');

let team = []; 

function mainHtml(inner) {
  let html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
      integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
      crossorigin="anonymous"
    />
  </head>
  <body>
      <header class="jumbotron jumbotron-fluid bg-danger">
          <div class="container">
          <h1 class="display-3 text-center text-light">My Team</h1>
          </div>
      </header>
      <div class="container">
          <div class="row d-flex justify-content-center flex-wrap">
          ${inner}
          </div>
      </div>
  </body>
  </html>`
  return html
} 
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// Prompt question of related role and push new member object to array 'team'
function addMember(member) {
  // console.log(member)
  const newmember = new member
  console.log(`Please enter ${newmember.getRole()}'s infor`);
  inquirer.prompt(newmember.getQuestion())
.then (answers => {
  for (let i in answers) {
    newmember[i]= answers[i] 
  }
  console.log(`A new member is assigned to your team`);
  // console.log(answers);
  // console.log(newManager);
  team.push(newmember);
  // console.log(team);
  addMemberCheck()
})
};

// Prompt question to check whether user want to add new member or finish building their team
function addMemberCheck() {
  inquirer.prompt(
    {
      type: 'list',
      name: 'role',
      message: `Do you want to add another member to your dream team?`,
      choices: [`Add an engineer`,`Add an intern`,`Finish building my dream team`]
  }, 
  )
  .then(ans => {
    switch (ans.role) {
      case `Add an engineer`:
        addMember(Engineer);
        break;
      case `Add an intern`:
        addMember(Intern);
        break;
      case `Finish building my dream team`:
        createHtmlfile();
        break;
    }
  }
  )
};

// Create html file
function createHtmlfile(){
  let innerHTMl ='';
  // console.log(team)
  team.forEach(member => {
    // console.log(innerHTMl);
    innerHTMl += member.html();
    // console.log(innerHTMl);
  })
  // console.log(innerHTMl);
  fs.writeFile(`./dist/index.html`, mainHtml(innerHTMl), (err) =>
  err ? console.log(err) : console.log('Success!'))
}

// Initialisation
addMember(Manager);