const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and github if provided valid arguments", () => {
            const engineer = new Engineer("Bob", 0, "bob@email.com", "BobTheCoder");

            expect(engineer.name).toEqual("Bob");
            expect(engineer.id).toEqual(0);
            expect(engineer.email).toEqual("bob@email.com");
            expect(engineer.github).toEqual("BobTheCoder");
        });
    });

    describe("getGithub", () => {
        it("should get the GitHub of the Engineer", () => {
            const engineer = new Engineer("Bob", 0, "bob@email.com", "BobTheCoder");
            
            expect(engineer.getGithub()).toEqual("BobTheCoder");
        });
    });

    describe("getRole", () => {
        it("should get the Role of the Engineer", () => {
            const engineer = new Engineer("Bob", 0, "bob@email.com", "BobTheCoder");
            
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});