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
})
describe("Name", () => {
    it("should return an employee's name", ()
    => {
        const name = "Sophie"
        const obj = new Employee(name);
        expect(obj.name).toBe(name)
    }
    )
})
