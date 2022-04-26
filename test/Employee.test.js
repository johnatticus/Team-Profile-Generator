// require the employee from the lib folder
const Employee = require('../lib/Employee')

// test can begin employee instance
describe("Employee", () => {
    it("Begin the instance of a new employee", () => {
        const e = new Employee();
    expect(typeof(e)).toBe("object");
    });

// test can set name via constructor args
    it("Can set a name with the constructor arguments", () => {
        const name = "Thad";
        const e = new Employee("Thad");
    expect(e.name).toBe(name);
})
// can set id via constructor args
    it("Can set an ID with the constructor arguments", () => {
        const id = 17;
        const e = new Employee("Thad", 17);
    expect(e.id).toBe(id);
})
// can set email via constructor args
        it("Can set an email with the constructor arguments", () => {
        const email = "thadjarvis@angelfire.com";
        const e = new Employee("Thad", 17, "thadjarvis@angelfire.com");
    expect(e.email).toBe(email);
})
// can set name via constructor args
// can set id via constructor function
// can get email via constructor function
// role functrion should return employee
});