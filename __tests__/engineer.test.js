const Engineer = require("../lib/Engineer");

describe("Github", () => {
    it("should return an engineers's Github", () => {
        const name = "Sophie"
        const email = "sophie@gmail.com"
        const id = 2000
        const GithubUsername = "sophiedeskin"
        const obj = new Engineer(name, id, email, GithubUsername);
        expect(obj.getGithubUsername()).toBe(GithubUsername);
    }
)})