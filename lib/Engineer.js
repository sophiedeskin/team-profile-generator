const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, GithubUsername) {
        super(name, id, email);
        this.GithubUsername = GithubUsername;
    }
    getGithubUsername() {
        return this.GithubUsername;
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;