const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("Set Office number", () => {
    const testOffice = 101;
    const manager = new Manager("Bill", 1234, "1234@test.com", testOffice);
    expect(manager.officeNumber).toBe(testOffice);
});

test("Return Office number", () => {
    const testOffice = 101;
    const manager = new Manager("Bill", 1234, "1234@test.com", testOffice);
    expect(manager.getOfficeNumber()).toBe(testOffice);

});

test("Role is returned as \"Manager\"", () => {
    const testRole = "Manager";
    const manager = new Manager("Bill", 1234, "1234@test.com", 101);
    expect(manager.getRole()).toBe(testRole);
});
