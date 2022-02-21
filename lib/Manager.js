const {Employee,defaultQuestions} = require("./Employee");
const newQuestion = {
  type: 'input',
  name: 'office',
  message: `Please enter your office number?`,
},
const questions = defaultQuestions.concat(newQuestion)

class Manager extends Employee {
    constructor(name,id,email,officenumber){
        super(name,id,email);
        this.officenumber = officenumber;
        this.questions = questions;
    }
  
    getRole() {return 'Manager'};
    getQuestion() {
        return this.questions;
    }
}

module.exports = Manager;