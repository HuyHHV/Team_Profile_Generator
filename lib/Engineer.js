const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(){
        super(emname,id,email);
        this.gitHub = getgitHub();
    }
    getgitHub(){
        inquirer
      .prompt(
        [{
            type: "input",
            name: "gitHub",
            message: "Please enter employee's github name:",
             }]
      )
      .then(ans => {
        link= `https://github.com/`+ `${ans}`
          return link});
    }
    getRole() {return 'Employee'};
}