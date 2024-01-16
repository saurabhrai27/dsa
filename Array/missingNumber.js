// Approach 1:
function missingNumber(arr, n) {
    let num;
    let sum1 =  (n * (n + 1)) / 2;
    let sum2 = 0;

    for(let i = 0; i < arr.length; i++) {
        sum2 += arr[i];
    }

    num = sum1 - sum2;
    
    return num;
}

const arr = [1, 2, 4, 5];
console.log('Approach1: ', missingNumber(arr, 5));

//Approach 2: 

function missingNumber2(arr, n) {
    let xor1 = 0;
    let xor2 = 0;

    for(let i = 1; i <= n; i++) {
        xor1  = xor1 ^ i;
    }

    for(let i = 0; i < n - 1; i++) {
        xor2 = xor2 ^ arr[i];
    }

    return xor1 ^ xor2;
}

console.log('Approach 2: ', missingNumber2(arr, 5));

//Approach 3:

function missingNumber3(arr, n) {
    let xor1 = 0;
    let xor2 = 0;

    for(let i = 0; i < n - 1; i++) {
        xor2 = xor2 ^ arr[i];
        xor1 = xor1 ^ (i + 1);
    }

    xor1 = xor1 ^ n;

    return xor1 ^ xor2;
}

console.log('Approach 3: ', missingNumber3(arr, 5));