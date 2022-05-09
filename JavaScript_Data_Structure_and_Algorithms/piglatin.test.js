const {translatePigLatin} = require('./piglatin');

test("test pig latin", () => {
    expect(translatePigLatin('california')).toBe('aliforniacay');
    expect(translatePigLatin('algorithm')).toBe('algorithmway');
    expect(translatePigLatin('glove')).toBe('oveglay');
    expect(translatePigLatin('rhythm')).toBe('rhythmay');
})