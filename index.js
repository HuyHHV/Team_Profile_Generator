const Manager = require('./lib/Manager');
const Engineer = require("./lib/Engineer")
fs = require('fs');
inquirer = require('inquirer');

let team = []; 

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// Prompt question of related role
function addManager() {
  const newManager = new Manager
  inquirer.prompt(newManager.getQuestion())
.then (answers => {
  for (let i in answers) {
    newManager[i]= answers[i] 
  }
  console.log(answers);
  console.log(newManager);
})
};

function addEngineer() {
  const newEngineer = new Engineer
  team.push(newmember);
  console.log(team);
};

addManager();

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

