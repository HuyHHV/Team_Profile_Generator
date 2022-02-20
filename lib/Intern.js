const Employee = require("./Employee");
const inquirer = require("inquirer")
class Engineer extends Employee {
    constructor(){
        super(emname,id,email);
        this.schoole = getSchoole();
    }
    getSchoole(){
        inquirer
      .prompt(
        [{
            type: "input",
            name: "school",
            message: "Please enter interm's school:",
             }]
      )
      .then(ans => {return ans});
    }
    getRole() {return 'Employee'};
}