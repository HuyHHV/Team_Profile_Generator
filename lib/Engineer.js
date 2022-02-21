const {Employee,defaultQuestions} = require("./Employee");
const newQuestion =  {
  type: 'input',
  name: 'gitHub',
  message: `Please enter your github account?`,
};
const questions = defaultQuestions.concat(newQuestion)

class Engineer extends Employee {
    constructor(name,id,email,gitHub){
        super(name,id,email);
        this.gitHub = gitHub;
        this.questions=questions;
    }
    getgitHub(){ 
      const link= `https://github.com/`+ `${ans}`
      return link
    }

    getRole() {return 'Employee'};
}

module.exports = Engineer;