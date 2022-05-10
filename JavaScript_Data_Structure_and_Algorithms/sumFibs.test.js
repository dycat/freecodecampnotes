const {sumFibs} = require('./sumFibs');


test("sum fibs single", () => {
    expect(sumFibs(1)).toBe(1);
    expect(sumFibs(1000)).toBe(1785);
});