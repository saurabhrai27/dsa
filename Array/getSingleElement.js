// Approach 1: Array Hash
function getSingleElement(arr) {
    // Size of the array:
    let n = arr.length;

    // Find the maximum element:
    let maxi = arr[0];
    for (let i = 0; i < n; i++) {
        maxi = Math.max(maxi, arr[i]);
    }

    // Declare hash array of size maxi+1
    // And hash the given array:
    let hash = new Array(maxi + 1).fill(0);
    for (let i = 0; i < n; i++) {
        hash[arr[i]]++;
    }

    // Find the single element and return the answer:
    for (let i = 0; i < n; i++) {
        if (hash[arr[i]] === 1) {
            return arr[i];
        }
    }

    // This line will never execute
    // if the array contains a single element.
    return -1;
}

// Approach 2: Map Hash

function getSingleElement(arr) {
    // Size of the array:
    const n = arr.length;

    // Declare the hashmap.
    // And hash the given array:
    const hashmap = new Map();
    for (let i = 0; i < n; i++) {
        const num = arr[i];
        hashmap.set(num, (hashmap.get(num) || 0) + 1);
    }

    // Find the single element and return the answer:
    for (const [num, count] of hashmap) {
        if (count === 1) {
            return num;
        }
    }

    // This line will never execute
    // if the array contains a single element.
    return -1;
}

// Approach 3: Using XOR

function getSingleElement3(nums) {
    let unique = 0;

    for(let i = 0; i< nums.length; i++) {
        unique = unique ^ nums[i];
    }

    return unique;
}

let nums = [4,1,2,1,2];
console.log(getSingleElement3(nums));
