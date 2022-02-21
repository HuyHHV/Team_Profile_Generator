const {questions,Manager} = require("../lib/Manager");

describe('class Manager', () =>{
  const newEmployee = new Manager(`Huy`,`123`,`vohuy819@gmail.com`,`officetestnumber`)
  describe(`function getOfficenumber()`,() =>{
    it(`return Manager's office number`,() =>{
      expect(newEmployee.getOfficenumber()).toEqual(`officetestnumber`);
    })
  })
  describe(`function getQuestion()`,() =>{
    it(`return promted questions`,() =>{
      expect(newEmployee.getQuestion()).toEqual(questions);
    })
  });
  
  describe(`function getRole()`,() =>{
    it(`return employee's role`,() =>{
      expect(newEmployee.getRole()).toEqual(`Manager`);
    })
  });
})