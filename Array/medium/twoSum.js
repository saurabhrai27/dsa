/** 
 * Two Sum  
 * N = 5, arr[] = {2,6,5,8,11}, target = 14
 * This question have 2 types one where elements are required other where index of the element is required
*/

// Using map as an hash
function twoSumMap(arr, target) {
    const sumMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        if(sumMap.has(target - arr[i])) {
            return [sumMap.get(target - arr[i]), i]
        } else {
            sumMap.set(arr[i], i);
        }
    }

    return -1;
}

const arr = [2,6,5,8,11];
console.log(twoSumMap(arr, 14));

// Using two pointers
// In this approach we can not return the index of the element 
function twoSumPointers(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    arr.sort((a, b) => a - b);
    console.log(arr);
    while(left < right) {
        let sum = arr[left] + arr[right]
        if(sum === target) {
            return [arr[left], arr[right]]
        } else if(sum < target) {
            left++;
        } else right--;
    }

    return -1;
}

const arr2 = [2,6,5,8,11];
console.log(twoSumPointers(arr2, 14));