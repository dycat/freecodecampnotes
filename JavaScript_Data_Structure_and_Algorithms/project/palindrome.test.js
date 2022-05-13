const {palindrome} = require('./palindrome')

test("test palindrome", () => {
    expect(palindrome('eye')).toBeTruthy();
    expect(palindrome('_eye')).toBeTruthy();//toBeFalsy();
    expect(palindrome("race car")).toBeTruthy();
    expect(palindrome("A man, a plan, a canal. Panama")).toBeTruthy();
    expect(palindrome("My age is 0, 0 si ega ym.")).toBeTruthy();
});