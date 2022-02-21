const inquirer = require("inquirer");
defaultQuestions= [
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
];



class Employee {
    constructor(name,id,email) {
      this.name = name;
      this.id = id;;
      this.email = email;
    }
    getName()  {return this.name}
  
    getID()  {return this.id};

    getEmail()  {return this.email}

    getRole() {return 'Employee'};

    getQuestions() {
      return this.questions
    }
 
}
module.exports = {Employee,defaultQuestions};