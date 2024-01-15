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
console.log('Missing Number is: ', missingNumber(arr, 5));