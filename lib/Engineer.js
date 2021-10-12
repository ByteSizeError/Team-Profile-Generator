const Employee = require(lib/Employee.js);

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        console.log(`GitHub: ${this.github}`);
    }

    getRole() {
        return Engineer;
    }
}