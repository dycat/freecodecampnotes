const { steamrollArray } = require('./steamroller');

test("test flaten array", () => {
    expect(steamrollArray([[["a"]], [["b"]]])).toStrictEqual(["a", "b"]);
    expect(steamrollArray([1, [2], [3, [[4]]]])).toStrictEqual([1, 2, 3, 4]);
});