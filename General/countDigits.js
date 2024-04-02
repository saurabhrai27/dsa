// Count the number of digits

function countDigits(n) {
    let count = 0;
    while(n > 0) {
        count++;
        n = Math.floor(n / 10);
    }
    return count
}

console.log('countDigits',countDigits(7789));

function countDigits2(n) {
    return Math.floor(Math.log10(n) + 1);
}

console.log('countDigits2',countDigits2(7789));

// Print the digits from a number

function printDigits(n) {
    while(n > 0) {
        let lastDigit = n % 10;
        console.log(lastDigit);
        n = n - lastDigit
        // n = Math.floor(n / 10);
        n = n / 10;
        
    }
}
console.log('printDigits:');
printDigits(7789);