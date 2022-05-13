const { addTogether } = require('./addTogether');

test("test add togather", () => {
    expect(addTogether(2, 3)).toEqual(5);
    expect(addTogether(5)(7)).toEqual(12);
});