const {questions,Engineer} = require("../lib/Engineer");

describe('class Engineer', () =>{
  const newEmployee = new Engineer(`Huy`,`123`,`vohuy819@gmail.com`,`HuyHHV`)
  describe(`function getgitHub()`,() =>{
    it(`return employee's gitHub`,() =>{
      expect(newEmployee.getgitHub()).toEqual(`HuyHHV`);
    })
  })
  describe(`function getQuestion()`,() =>{
    it(`return promted questions`,() =>{
      expect(newEmployee.getQuestion()).toEqual(questions);
    })
  });
  describe(`function html()`,() =>{
    it(`return html section for createing index html`,() =>{
      expect(newEmployee.html()).toEqual(` <div class="col-4 mb-5">
      <div class="card h-100 bg-light shadow">
        <div class="card-body p-0">
          <h4 class="card-title bg-primary p-4">Huy<br />Engineer</h4>
          <ul class="list-group p-4">
            <li class="list-group-item">ID: 123</li>
            <li class="list-group-item"> Email: <a href="mailto:vohuy819@gmail.com">vohuy819@gmail.com</a></li>
            <li class="list-group-item"> GitHub: <a href="https://github.com/HuyHHV" target="_blank">HuyHHV</a></li>
          </ul>
        </div>
        </div>
      </div>`);
    })
  });
  describe(`function getRole()`,() =>{
    it(`return employee's role`,() =>{
      expect(newEmployee.getRole()).toEqual(`Engineer`);
    })
  });
})