const {Employee,defaultQuestions} = require("../lib/Employee");

describe('class Employee', () =>{
  const newEmployee = new Employee(`Huy`,`123`,`vohuy819@gmail.com`)
  describe(`function getName()`,() =>{
    it(`return employee's name`,() =>{
      expect(newEmployee.getName()).toEqual(`Huy`);
    })
  })
  describe(`function getName()`,() =>{
    it(`return employee's name`,() =>{
      expect(newEmployee.getID()).toEqual(`123`);
    })
  });
  describe(`function getEmail()`,() =>{
    it(`return employee's Email`,() =>{
      expect(newEmployee.getEmail()).toEqual(`vohuy819@gmail.com`);
    })
  });
  describe(`function getRole()`,() =>{
    it(`return employee's role`,() =>{
      expect(newEmployee.getRole()).toEqual(`Employee`);
    })
  });
})