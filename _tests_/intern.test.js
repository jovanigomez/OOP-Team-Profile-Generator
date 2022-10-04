const Intern = require("../lib/Intern");

describe("Intern class constructor", () => {
  it("New intern creation", () => {
    const teamMember = new Intern("Jojo", "1", "jojo@gmail.com", "UofA");
    expect(teamMember.name).toEqual("Jojo");
    expect(teamMember.id).toEqual("1");
    expect(teamMember.email).toEqual("jojo@gmail.com");
    expect(teamMember.internSchool).toEqual("UofA");
  }),
    it("getName Function", () => {
      const teamMember = new Intern(
        "Jojo",
        "1",
        "jojo@gmail.com",
        "jovanigomez"
      );
      expect(teamMember.getName()).toEqual("Jojo");
    });
});