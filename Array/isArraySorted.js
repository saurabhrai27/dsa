function isArraySorted(arr) {
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i - 1]) return false;
    }
    return true;
}

const arr = [0, 0, 0, 1];
const arr2 = [4, 5, 4, 4, 4];
const arr3 = [1, 2, 3, 4, 5];
console.log(isArraySorted(arr));
console.log(isArraySorted(arr2));
console.log(isArraySorted(arr3));