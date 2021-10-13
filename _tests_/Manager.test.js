const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and github if provided valid arguments", () => {
            const manager = new Manager("Bob", 0, "bob@email.com", 0);

            expect(manager.name).toEqual("Bob");
            expect(manager.id).toEqual(0);
            expect(manager.email).toEqual("bob@email.com");
            expect(manager.office).toEqual(0);
        });
    });

    describe("getGithub", () => {
        it("should get the GitHub of the Manager", () => {
            const manager = new Manager("Bob", 0, "bob@email.com", 0);
            
            expect(manager.getOffice()).toEqual(0);
        });
    });

    describe("getRole", () => {
        it("should get the Role of the Manager", () => {
            const manager = new Manager("Bob", 0, "bob@email.com", 0);
            
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});