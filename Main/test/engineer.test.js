const Engineer = require("../lib/Engineer");

describe('Engineer class', () => {
  it('Checking attributes name,id email, gitHub', () => {
    const testEngineer = new Engineer('Tyler', 1, "tylerpowerst@aol.com", "UNH");

    expect(testEngineer.github).toEqual("UNH")
    expect(testEngineer.name).toEqual("Tyler")
    expect(testEngineer.email).toEqual("tylerpowerst@aol.com")
    expect(testEngineer.id).toEqual(1)


  });


  it('Checking methods, getName, getId, getEmail, getgithub, getRole', () => {
    const testEngineer = new Engineer('Tyler', 1, "tylerpowerst@aol.com", "UNH");

    expect(testEngineer.getgithub()).toEqual("UNH")
    expect(testEngineer.getName()).toEqual("Tyler")
    expect(testEngineer.getEmail()).toEqual("tylerpowerst@aol.com")
    expect(testEngineer.getId()).toEqual(1)
    expect(testEngineer.getRole()).toBe("Engineer")

  })

});

