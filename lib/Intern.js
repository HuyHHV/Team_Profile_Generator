const Employee = require("./Employee");
const inquirer = require("inquirer")
class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
        const newQuestion =  {
          type: 'input',
          name: 'school',
          message: `Please enter your school name?`,
        };
        this.question=Employee.question.push(newQuestion);
    }
    
    getSchoole(){return school};
    
    getRole() {return 'Employee'};
}

module.exports = Intern;