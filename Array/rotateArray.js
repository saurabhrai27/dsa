// Left rotate a array by one place

function leftRotateOnePlace(arr) {
    let temp = arr[0];

    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp; 
}

const arr1 = [1, 2, 3, 4, 5, 6, 7];
leftRotateOnePlace(arr1);
console.log(arr1);

// Left rotate by D places
/**
 * Approach: 1
 *  Copy the last k elements into the temp array
 *  Shift n-k elements from the beginning by k position to the right
 *  Copy the elements into the main array from the temp array
 */
function leftRotateByD(arr, k, n) {
    const temp = [];
    k = k % n;
    for(let i = 0; i < k; i++){
        temp.push(arr[i]);
    }

    for(let i = k; i < n; i++) {
        arr[i - k] = arr[i];
    }

    for(let i = n - k; i < n; i++) {
        arr[i] = temp[i - (n-k)];
    }
}

const arr2 = [1, 2, 3, 4, 5, 6, 7]
leftRotateByD(arr2, 3, arr1.length);
console.log(arr2);

/**
 * Approach: 2 Reversal Algorithm
 * Step 1: Reverse the last k elements of the array
 * Step 2: Reverse the first n-k elements of the array.
 * Step 3: Reverse the whole array.
 */

function leftRotateByDPlaces(arr3, k, n) {
    // Reverse first k elements
    reverseArr(arr3, 0, k - 1);
    // Reverse last n-k elements
    reverseArr(arr3, k, n - 1);
    // Reverse whole array
    reverseArr(arr3, 0, n-1);
}

function reverseArr(arr, start, end) {
    while(start <= end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

const arr3 = [1,2,3,4,5,6,7]
leftRotateByDPlaces(arr3, 3, arr3.length)
console.log("Using Reverse");
console.log(arr3);


// Rotate to right

const rotateToRight = function(nums, k) {
    if(nums.length <= 1) return;

    const temp = [];
    const n = nums.length;

    k = k % n;
    if (k > n) return;

    for(let i = n - k; i < n; i++) {
        temp.push(nums[i])
    }

    for(let i = n - k - 1; i >=0; i--) {
        nums[i + k] = nums[i]
    }

    for(let i = 0; i < k; i++) {
        nums[i] = temp[i]
    }
};

var rotateRightUsingReverse = function(nums, k) {
    if(nums.length <= 1) return;
    
    const n = nums.length;

    k = k % n;
    if (k > n) return;

    reverseArr(nums, 0, n - k - 1);
    reverseArr(nums, n - k, n - 1);
    reverseArr(nums, 0, n -1)
};