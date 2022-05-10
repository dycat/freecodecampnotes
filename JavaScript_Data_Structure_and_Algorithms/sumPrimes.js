// Need further research
function sumPrimes(num) {
    let primes = [];
    let sieve = [];

    for (let i = 2; i <= num; i++ ) {
        if (!sieve[i]) {
            primes.push(i);   
            for (let j = i * i; j<= num; j += i) {
                sieve[j] = true;
            }
        }
    }

    let sum = 0;
    primes.forEach(value => sum += value);
    return sum;
}

module.exports = {
    sumPrimes
}