const { rangeOfNumbers } = require('./rangeOfNumbers');

test("range of numbers", () => {
    expect(rangeOfNumbers(1, 5)).toStrictEqual     ([1, 2, 3, 4, 5])
})