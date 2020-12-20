const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("Sets Github username", () => {
    const testGit = "TestGitUser";
    const engineer = new Engineer("Bill", 1234, "1234@test.com", testGit);
    expect(engineer.github).toBe(testGit);
});

test("Returns Github username", () => {
    const testGit = "TestGitUser";
    const engineer = new Engineer("Bill", 1234, "1234@test.com", "TestGitUser");
    expect(engineer.getGithub()).toBe(testGit);
});

test("Returns \"Engineer\" as job role", () => {
    const testRole = "Engineer"
    const engineer = new Engineer("Bill", 1234, "1234@test.com", "TestGitUser");
    expect(engineer.getRole()).toBe(testRole)
});

