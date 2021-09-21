const Manager = require("../lib/Manager");

describe("Office Number", () => {
    it("should return a managers office number", () => {
        const name = "Sophie"
        const email = "sophie@gmail.com"
        const id = 2000
        const officeNumber = 8045553366
        const obj = new Manager(name, id, email, officeNumber);
        expect(obj.getOfficeNumber()).toBe(officeNumber);
    }
)})