const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("Set the school for the Intern", () => {
    const testSchool = "UCLA Bootcamp";
    const intern = new Intern("Bill", 1234, "1234@test.com", testSchool);
    expect(intern.school).toBe(testSchool);
});

test("Returns the school for the Intern", () => {
    const testSchool = "UCLA Bootcamp";
    const intern = new Intern("Bill", 1234, "1234@test.com", testSchool);
    expect(intern.getSchool()).toBe(testSchool);
});

test("The role is returned as \"Intern\"", () => {
    const testRole = "Intern";
    const intern = new Intern("Bill", 1234, "1234@test.com", "UCLA Bootcamp");
    expect(intern.getRole()).toBe(testRole);
});