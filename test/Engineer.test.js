// require intern and employee from lib
const Engineer = require("../lib/Engineer");
// can set GitHub username
it("Set GitHub username using constructor argument", () => {
    const git = "CodeBroGuy";
    const e = new Engineer("Beavis", 2, "beavis@company.com", "CodeBroGuy");
    expect(e.github).toBe(git);
})