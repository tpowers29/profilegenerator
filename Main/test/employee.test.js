const Employee = require("../lib/Employee");

describe('Emloyee class', () => {
    it('Checking attributes name,id email', () => {
        const testEmployee = new Employee('Tyler', 1, "tylerpowerst@aol.com");

        expect(testEmployee.name).toEqual("Tyler")
        expect(testEmployee.email).toEqual("tylerpowerst@aol.com")
        expect(testEmployee.id).toEqual(1)


    });


    it('Checking methods, getName, getId, getEmail, getRole', () => {
        const testEmployee = new Employee('Tyler', 1, "tylerpowerst@aol.com");

        expect(testEmployee.getName()).toEqual("Tyler")
        expect(testEmployee.getEmail()).toEqual("tylerpowerst@aol.com")
        expect(testEmployee.getId()).toEqual(1)
        expect(testEmployee.getRole()).toBe("Employee")

    })

});



