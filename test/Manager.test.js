// require manager and employee from lib
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee")
// can set office number
describe("Set office number using constructor argument", () => {
    const office = 5555555555;
    const e = new Manager("Randy", 1, "randy@company.com", office);
    expect(e.officenumber).toBe(office);
})
// can get office number
// role returns manager