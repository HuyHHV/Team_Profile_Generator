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
      const link= this.gitHub
      return link
    }

    getRole() {return 'Engineer'};

    getQuestion() {
      return this.questions;
  }

    html() {
      const html = ` <div class="col-4 mb-5">
      <div class="card h-100 bg-light shadow">
        <div class="card-body p-0">
          <h4 class="card-title bg-primary p-4">${this.getName()}<br />${this.getRole()}</h4>
          <ul class="list-group p-4">
            <li class="list-group-item">ID: ${this.getID()}</li>
            <li class="list-group-item"> Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
            <li class="list-group-item"> GitHub: <a href="https://github.com/${this.getgitHub()}" target="_blank">${this.getgitHub()}</a></li>
          </ul>
        </div>
        </div>
      </div>`
      return html;
    }
}

module.exports = {questions,Engineer};