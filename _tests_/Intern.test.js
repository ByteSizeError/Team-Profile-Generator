const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and github if provided valid arguments", () => {
            const intern = new Intern("Bob", 0, "bob@email.com", "University");

            expect(intern.name).toEqual("Bob");
            expect(intern.id).toEqual(0);
            expect(intern.email).toEqual("bob@email.com");
            expect(intern.school).toEqual("University");
        });
    });

    describe("getGithub", () => {
        it("should get the School of the Intern", () => {
            const intern = new Intern("Bob", 0, "bob@email.com", "University");
            
            expect(intern.getSchool()).toEqual("University");
        });
    });

    describe("getRole", () => {
        it("should get the Role of the Intern", () => {
            const intern = new Intern("Bob", 0, "bob@email.com", "University");
            
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});