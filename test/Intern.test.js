// require intern and employee from lib
const Intern = require("../lib/Intern");
// can set school attended
it("Set school using constructor argument", () => {
    const school = "UCF";
    const e = new Intern("Sally", 12, "sally@company.com", school);
    expect(e.school).toBe(school);
})