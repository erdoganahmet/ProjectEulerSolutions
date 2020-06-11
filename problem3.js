const getFactors = function (n) {
    let factors = [];
    for (var i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            factors.push(i);
            if (n / i != i) {
                factors.push(n / i);
            }
        }
    }
    return factors;
}
const isPrime = n => getFactors(n).length == 2;
const getPrimeFactors = function (n) {
    let factors = getFactors(n);
    let greatestPrimeFactor = 1;
    factors.map(function (factor) {
        if (factor > greatestPrimeFactor && isPrime(factor)) {
            greatestPrimeFactor = factor;
        }
    })
    return greatestPrimeFactor;
}
console.log(getPrimeFactors(600851475143));