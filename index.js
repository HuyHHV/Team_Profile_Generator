const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer")
const Engineer = require("./lib/Intern")
fs = require('fs');
inquirer = require('inquirer');

let team = []; 

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// Prompt question of related role and push new member object to array 'team'
function addMember(member) {
  const newmember = new member
  inquirer.prompt(newmember.getQuestion())
.then (answers => {
  for (let i in answers) {
    newmember[i]= answers[i] 
  }
  console.log(`A new member is assigned to your team`);
  // console.log(answers);
  // console.log(newManager);
  team.push(newmember);
  console.log(team);
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
    switch (ans) {
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

function createHtmlfile(){
  
}


// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

