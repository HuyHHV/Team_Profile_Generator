
const {Manager} = require("./lib/Manager");
const {Engineer} = require("./lib/Engineer")
const {Intern} = require("./lib/Intern");
const mainHtml = require("./lib/mainhtml");
fs = require('fs');
inquirer = require('inquirer');
let team = []; 
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// Prompt question of related role and push new member object to array 'team'
function addMember(member) {
  // console.log(member)
  const newmember = new member;
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