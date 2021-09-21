const Intern = require("../lib/Intern");

describe("School", () => {
    it("should return an intern's school", () => {
        const name = "Sophie"
        const email = "sophie@gmail.com"
        const id = 2000
        const school = "ASU"
        const obj = new Intern(name, id, email, school);
        expect(obj.getSchool()).toBe(school);
    }
)})