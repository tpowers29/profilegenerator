const Manager = require("../lib/Manager");

describe('Manager class', () => {
  it('Checking attributes name,id email, officeNumber', () => {
    const testManager = new Manager('Tyler', 1, "tylerpowerst@aol.com", "ON:1792");

    expect(testManager.officeNumber).toEqual("ON:1792")
    expect(testManager.name).toEqual("Tyler")
    expect(testManager.email).toEqual("tylerpowerst@aol.com")
    expect(testManager.id).toEqual(1)


  });


  it('Checking methods, getName, getId, getEmail, getOfficeNumber, getRole', () => {
    const testManager = new Manager('Tyler', 1, "tylerpowerst@aol.com", "ON:1792");

    expect(testManager.getOfficeNumber()).toEqual("ON:1792")
    expect(testManager.getName()).toEqual("Tyler")
    expect(testManager.getEmail()).toEqual("tylerpowerst@aol.com")
    expect(testManager.getId()).toEqual(1)
    expect(testManager.getRole()).toBe("Manager")

  })

});
