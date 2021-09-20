// const { tsImportEqualsDeclaration } = require("@babel/types");
// const { test } = require("@jest/globals");
// const { it, expect } = require("@jest/globals");
// const { describe } = require("yargs");
const Employee = require("../lib/Employee");

// test('Get employee name from user input', () => {
//     const name = "Sophie"
//     const employee = new Employee(name)
//     expect(employee.name).toBe(name)
// });

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object creating a new employee", () => {
            const obj = new Employee();
            expect(typeof(obj)).toBe("object");
        })
    })
    describe("Name", () => {
        it("should return an employee's name", ()
        => {
            const name = "Sophie"
            const obj = new Employee(name);
            expect(obj.getName()).toBe(name);
        }
    )
    describe("ID", () => {
        it("should return an employee's id", ()
        => {
            const name = "Sophie"
            const id = 2000
            const obj = new Employee(name, id);
            expect(obj.getId()).toBe(id);
        }
    )
    describe("Email", () => {
        it("should return an employee's email", ()
        => {
            const name = "Sophie"
            const email = "sophie@gmail.com"
            const id = 2000
            const obj = new Employee(name, id, email);
            expect(obj.getEmail()).toBe(id);
        }
    )
})
})})})
