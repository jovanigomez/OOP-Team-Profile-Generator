const Engineer = require("../lib/Engineer");

describe("Engineer class constructor", () => {
  it("New engineer creation", () => {
    const teamMember = new Engineer(
      "Jojo",
      "1",
      "Jojo@gmail.com",
      "jovanigomez"
    );
    expect(teamMember.name).toEqual("Jojo");
    expect(teamMember.id).toEqual("1");
    expect(teamMember.gitHubUsername).toEqual("jovanigomez");
  }),
    it("getName Function", () => {
      const teamMember = new Engineer(
        "Jojo",
        "1",
        "jojo@gmail.com",
        "jovanigomez"
      );
      expect(teamMember.getName()).toEqual("Jojo");
    });
});