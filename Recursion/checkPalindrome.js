// Check if string is palindrome

function checkPalindrome(i, str) {
    if( i >= Math.floor(str.length / 2)) return true
    if (str[i] !== str[str.length - i - 1]) return false;
    return checkPalindrome(i + 1, str)
}

console.log(checkPalindrome(0,'madam'));
console.log(checkPalindrome(0,'madama'));