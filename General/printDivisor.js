// find all the divisor of a number 

function printDivisorsOptimal(n) {
    for(let i = 1; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            console.log(i)
            if(i !== n / i) console.log(n / i);
        }
    }
}

printDivisorsOptimal(36);

// We can check for prime number using above approach also

function checkPrimeNumber(n) {
    let count = 0;
    for(let i = 1; i * i <= n; i++) {
        if(n % i === 0) {
            count++;
            if((n / i) !==  i) {
                count++;
            }
        }
    }
    return count === 2
}

console.log(checkPrimeNumber(37));
console.log(checkPrimeNumber(16));