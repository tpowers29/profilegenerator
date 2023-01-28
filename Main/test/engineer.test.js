const Engineer = require("../lib/Engineer");

describe('Engineer class', () => {
  it('Checking attributes name,id email, gitHub', () => {
    const testEngineer = new Engineer('Tyler', 1, "tylerpowerst@aol.com", "tpowers29");

    expect(testEngineer.github).toEqual("tpowers29")
    expect(testEngineer.name).toEqual("Tyler")
    expect(testEngineer.email).toEqual("tylerpowerst@aol.com")
    expect(testEngineer.id).toEqual(1)


  });


  it('Checking methods, getName, getId, getEmail, getgithub, getRole', () => {
    const testEngineer = new Engineer('Tyler', 1, "tylerpowerst@aol.com", "tpowers29");

    expect(testEngineer.getGithub()).toEqual("tpowers29")
    expect(testEngineer.getName()).toEqual("Tyler")
    expect(testEngineer.getEmail()).toEqual("tylerpowerst@aol.com")
    expect(testEngineer.getId()).toEqual(1)
    expect(testEngineer.getRole()).toBe("Engineer")

  })

});

