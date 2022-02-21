const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name,id,email,gitHub){
        super(name,id,email);
        const newQuestion =  {
          type: 'input',
          name: 'gitHub',
          message: `Please enter your github account?`,
        };
        this.question=Employee.question.push(newQuestion);
        this.gitHub = gitHub;
    }
    getgitHub(){ 
      const link= `https://github.com/`+ `${ans}`
      return link
    }

    getRole() {return 'Employee'};
}

module.exports = Engineer;