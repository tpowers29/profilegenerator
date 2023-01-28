const Intern = require("../lib/Intern");

describe('Intern class', () => {
  it('Checking attributes name,id email, schoolName', () => {
    const testIntern = new Intern('Tyler', 1, "tylerpowerst@aol.com", "UNH");

    expect(testIntern.schoolName).toEqual("UNH")
    expect(testIntern.name).toEqual("Tyler")
    expect(testIntern.email).toEqual("tylerpowerst@aol.com")
    expect(testIntern.id).toEqual(1)


  });


  it('Checking methods, getName, getId, getEmail, getSchoolname, getRole', () => {
    const testIntern = new Intern('Tyler', 1, "tylerpowerst@aol.com", "UNH");

    expect(testIntern.getSchoolName()).toEqual("UNH")
    expect(testIntern.getName()).toEqual("Tyler")
    expect(testIntern.getEmail()).toEqual("tylerpowerst@aol.com")
    expect(testIntern.getId()).toEqual(1)
    expect(testIntern.getRole()).toBe("Intern")

  })

});



