const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name,id,email,officenumber){
        super(name,id,email);
        this.officenumber = officenumber;
        this.questions = [
            {
                type: 'input',
                name: 'name',
                message: `Please enter employer's name?`,
              },
            {
                type: 'input',
                name: 'id',
                message: `Please enter employer's id?`,
            },
            {
                type: 'input',
                name: 'email',
                message: `Please enter  employer's email?`,
              },
              {
                type: 'input',
                name: 'office',
                message: `Please enter your office number?`,
              },
            {
                type: 'list',
                name: 'role',
                message: `How do you want to build your team?`,
                choices: [`Add an engineer`,`Add an intern`,`Finish building my dream team`]
            }, 
          ];
    }
  
    getRole() {return 'Manager'};
    getQuestion() {
        return this.questions;
    }
}

module.exports = Manager;