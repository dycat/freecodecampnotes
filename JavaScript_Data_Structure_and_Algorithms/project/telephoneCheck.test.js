const { telephoneCheck } = require('./telephoneCheck');

test("test telephone check", () => {
    expect(telephoneCheck("555-555-5555")).toBeTruthy();
    expect(telephoneCheck("5555555555")).toBeTruthy();
    expect(telephoneCheck("1 (555) 555-5555")).toBeTruthy();
    expect(telephoneCheck("(555)555-5555")).toBeTruthy();
    expect(telephoneCheck("1(555)555-5555")).toBeTruthy();
    expect(telephoneCheck("1 555 555 5555")).toBeTruthy();
    expect(telephoneCheck("1 456 789 4444")).toBeTruthy();
    expect(telephoneCheck("(6054756961)")).toBeFalsy();
    expect(telephoneCheck("27576227382")).toBeFalsy();
    expect(telephoneCheck("(555-555-5555")).toBeFalsy(); 
    expect(telephoneCheck("11 555-555-5555")).toBeFalsy();
});
