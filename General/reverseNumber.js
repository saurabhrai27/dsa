// Reverse a given number exculde zero e.g 413000 should 314

function reverseNumber(number) {
    let reverseNumber = 0;
    while(number > 0) {
        let lastDigit = number % 10;
        reverseNumber = (reverseNumber * 10) + lastDigit;
        number = (number - lastDigit) / 10;
    }
    return reverseNumber
}

console.log(reverseNumber(1234));
console.log(reverseNumber(12300));

// Check for palindrome
function checkPalindrome(number) {
    let reverseNumber = 0;
    let duplicateNum = number
    while(number > 0) {
        let lastDigit = number % 10;
        reverseNumber = (reverseNumber * 10) + lastDigit;
        number = (number - lastDigit) / 10;
    }
    return reverseNumber === duplicateNum
}

console.log(checkPalindrome(121));
console.log(checkPalindrome(12));