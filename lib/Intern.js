const {Employee,defaultQuestions} = require("./Employee");
const newQuestion =  {
  type: 'input',
  name: 'school',
  message: `Please enter your school name?`,
};
const questions = defaultQuestions.concat(newQuestion);

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
        this.questions=questions;
    }
    
    getSchoole(){return school};
    
    getRole() {return 'Employee'};
}

module.exports = Intern;