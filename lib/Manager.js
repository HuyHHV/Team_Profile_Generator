const {Employee,defaultQuestions} = require("./Employee");
const newQuestion = {
  type: 'input',
  name: 'officenumber',
  message: `Please enter your office number?`,
};
const questions = defaultQuestions.concat(newQuestion)

class Manager extends Employee {
    constructor(name,id,email,officenumber){
        super(name,id,email);
        this.officenumber = officenumber;
        this.questions = questions;
    }

    getOfficenumber() {
        return this.officenumber
    }
  
    getRole() {return 'Manager'};
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
              <li class="list-group-item"> Office number: ${this.getOfficenumber()}</li>
            </ul>
          </div>
          </div>
        </div>`
        return html;
      }
}

module.exports = Manager;