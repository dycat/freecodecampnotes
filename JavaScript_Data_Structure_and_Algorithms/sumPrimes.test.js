const {sumPrimes} = require('./sumPrimes');

test("test sum of primes", () => {
    expect(sumPrimes(10)).toBe(17);
    expect(sumPrimes(977)).toBe(73156);
});

