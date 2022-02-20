const Employee = require("./Employee");
const inquirer = require("inquirer")
class Engineer extends Employee {
    constructor(officenumber){
        super(emname,id,email);
        this.officenumber = officenumber;
    }
  
    getRole() {return 'Manager'};
}