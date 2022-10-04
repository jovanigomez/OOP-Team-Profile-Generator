const Manager = require("../lib/Manager");

describe("Manager class constructor", () => {
  it("New manager creation", () => {
    const teamMember = new Manager("Jojo", "1", "jojo@gmail.com", "1337");
    expect(teamMember.name).toEqual("Jojo");
    expect(teamMember.id).toEqual("1");
    expect(teamMember.email).toEqual("jojo@gmail.com");
    expect(teamMember.officeNumber).toEqual("1337");
  }),
    it("getName Function", () => {
      const teamMember = new Manager("Jojo", "1", "jojo@gmail.com", "1337");
      expect(teamMember.getName()).toEqual("Jojo");
    });
});