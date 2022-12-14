const Employee = require("../lib/Employee");

describe("Employee class constructor", () => {
  it("New employee creation", () => {
    const teamMember = new Employee("Jojo", "1", "jojo@gmail.com");
    expect(teamMember.name).toEqual("Jojo");
    expect(teamMember.id).toEqual("1");
    expect(teamMember.email).toEqual("Jojo@gmail.com");
  }),
    it("getName Function", () => {
      const teamMember = new Employee("Jojo", "1", "jojo@gmail.com");
      expect(teamMember.getName()).toEqual("Jojo");
    });
});