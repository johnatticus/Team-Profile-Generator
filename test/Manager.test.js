// require manager and employee from lib
const Manager = require("../lib/Manager");
// can set office number
it("Set office number using constructor argument", () => {
    const office = 5555555555;
    const e = new Manager("Randy", 1, "randy@company.com", office);
    expect(e.officenumber).toBe(office);
})
// can get office number
// role returns manager