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
    
    getSchool(){return school};
    
    getRole() {return 'Intern'};

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
            <li class="list-group-item"> School: ${this.getSchool()}</li>
          </ul>
        </div>
        </div>
      </div>`
      return html;
    }
}

module.exports = Intern;