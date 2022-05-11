const {smallestCommons} = require("./lcm");

test("slm", () => {
    expect(smallestCommons([1, 5])).toBe(60);
})