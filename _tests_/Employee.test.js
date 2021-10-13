const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            const employee = new Employee("Bob", 0, "bob@email.com");

            expect(employee.name).toEqual("Bob");
            expect(employee.id).toEqual(0);
            expect(employee.email).toEqual("bob@email.com");
        });
    });

    describe("getName", () => {
        it("should get the name of the Employee", () => {
            const employee = new Employee("Bob", 0, "bob@email.com");
            
            expect(employee.getName()).toEqual("Bob");
        });
    });

    describe("getId", () => {
        it("should get the ID of the Employee", () => {
            const employee = new Employee("Bob", 0, "bob@email.com");
            
            expect(employee.getId()).toEqual(0);
        });
    });

    describe("getEmail", () => {
        it("should get the ID of the Employee", () => {
            const employee = new Employee("Bob", 0, "bob@email.com");
            
            expect(employee.getEmail()).toEqual("bob@email.com");
        });
    });

    describe("getRole", () => {
        it("should get the Role of the Employee", () => {
            const employee = new Employee("Bob", 0, "bob@email.com");
            
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});