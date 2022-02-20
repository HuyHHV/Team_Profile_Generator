const Employee = require("../lib/Employee");

const inquirer = require('inquirer');

jest.mock('inquirer', () => {
  return { prompt: jest.fn() };
});


describe('class Employee', () =>{
  describe(`user input Employee's name`,() =>{
    afterEach(() => {
      jest.resetAllMocks();
    });
    it(`it returns employee's name`, () =>{
      inquirer.prompt.mockResolvedValueOnce('Huy');
      const actual = await getAnswers('abc');
      expect(actual).toBe('Correct Answer');

    })
  })
})