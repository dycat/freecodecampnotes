const {convertToRoman} = require('./convertToRoman');

test('test convert roman', () => {
    expect(convertToRoman(2)).toEqual('II');
});