const { sum } = require('./sum.js');

test("sum", () => {
    expect(sum([1], 0)).toBe(0);
    expect(sum([2, 3, 4], 1)).toBe(2);
    expect(sum([2, 3, 4, 5], 3)).toBe(9);

});