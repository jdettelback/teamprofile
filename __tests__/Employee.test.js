const Employee = require('../lib/Employee')

describe("Employee", () => {
  it('should create an object and assign it to a new variable when called with a new operator', () => {
   const employee = new Employee();
    expect(employee).toBeInstanceOf(Employee);
  })
});

describe("employeeName", () => {
  it('should create an object and pass the employee name as an argument assigned to a new variable', () => {
    const employee = new Employee("Joe Smith", "test", "123");
    expect(employee.name).toBe("Joe Smith");
  })
});

describe("employeeId", () => {
  it("should create an object and assign the id variable with the input argument", () => {
    const employee = new Employee("Bill Jones", "test", "234");
    expect(employee.id).toBe("234");
  });
});

describe("employeeEmail", () => {
  it("should create an employee object with an email variable as the input arguemnt", () => {
    const employee = new Employee("John Smith", "test.email", "345");
    expect(employee.email).toBe("test.email");
  });
});

describe("getEmployeeName", () => {
  it('should return the name to to equal to the employee name variable', () => {
    const employee = new Employee("Mary Smith", "test", "456");
    expect(employee.getName()).toBe('Mary Smith');
  })
});

describe("getId", () => {
  it('should create an object and assign it to a new variable', () => {
    const employee = new Employee("Joe Smith", "test", '1234');
    expect(employee.getId() === ('1234'));
  });
});

describe("getEmail", () => {
  it('should create an object, assign it to a new variable and retun the email assigned to the employee', () => {
    const employee = new Employee("Mary Jones", "mary.test", "789");
    expect(employee.getEmail()).toBe('mary.test');
  });
});

describe("getRole", () => {
  it('should create an object, assign it to a new variable and return the assigned role', () => {
    const employee = new Employee("Bill Smith", "test", "678");
    expect(employee.getRole()).toBe("Employee");
  });
});

