// require intern and employee from lib
const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee")
// can set GitHub username
describe("Set GitHub username using constructor argument", () => {
    const github = "CodeBroGuy";
    const e = new Engineer("Beavis", 2, "beavis@company.com", github);
    expect(e.github).toBe(github);
})