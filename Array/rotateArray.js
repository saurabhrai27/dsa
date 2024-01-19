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
 * Approach: 2
 */

function leftRotateByDPlaces(arr3, k, n) {
    
}