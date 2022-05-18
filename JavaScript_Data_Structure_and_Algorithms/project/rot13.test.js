const {rot13} = require('./rot13');

test('test rot13', () => {
    expect(rot13("SERR PBQR PNZC")).toEqual('FREE CODE CAMP');
});