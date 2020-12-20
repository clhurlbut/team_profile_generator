const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Creates a new Employee object", () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe("object");
});

test("Sets Employee name", () => {
    const name = "Bill";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Sets Employee ID number", () => {
    const testId = 1234;
    const employee = new Employee("Bill", testId);
    expect(employee.id).toBe(testId);
});

test("Sets Employee Email", () => {
    const testEmail = "1234@test.com";
    const employee = new Employee("Bill", 1234, testEmail);
    expect(employee.email).toBe(testEmail);
});

test("Returns name of Employee", () => {
    const testName = "Bill";
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});

test("Returns ID number of Employee", () => {
    const testId = 1234;
    const employee = new Employee("Bill", testId);
    expect(employee.getId()).toBe(testId);
});

test("Returns Email of Employee", () => {
    const testEmail = "1234@test.com";
    const employee = new Employee("Bill", 1234, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});

test("Returns \"Employee\" as job role", () => {
    const testRole = "Employee"
    const employee = new Employee("Bill", 1234, "1234@test.com");
    expect(employee.getRole()).toBe(testRole)
});