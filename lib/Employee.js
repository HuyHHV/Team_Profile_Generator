const inquirer = require("inquirer");

class Employee {
    constructor() {
      this.emname = getName();
      this.id = getID();;
      this.email = getEmail();;
    }
    getName()  {
       inquirer
      .prompt(
        [{
            type: "input",
            name: "name",
            message: "Please enter employee's name:",
             }]
      )
      .then(ans => {return ans});
    };
    getID()  {
      inquirer
     .prompt(
       [{
           type: "input",
           name: "ID",
           message: "Please enter employee's ID:",
            }]
     )
     .then(ans => {return ans});
   };
   getEmail()  {
    inquirer
   .prompt(
     [{
         type: "input",
         name: "email",
         message: "Please enter employee's email:",
          }]
   )
   .then(ans => {return ans});
 };
 getRole() {return 'Employee'};

}

module.exports = Employee;