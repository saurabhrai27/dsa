/**
 * Merge Sort is a divide and conquers algorithm, it divides the given array into equal parts and then merges the 2 sorted parts. 
 * There are 2 main functions :
 * merge(): This function is used to merge the 2 halves of the array. It assumes that both parts of the array are sorted and merges both of them.
 * mergeSort(): This function divides the array into 2 parts. low to mid and mid+1 to high where
 * @param {*} arr 
 * @param {*} low leftmost index of the array
 * @param {*} high rightmost index of the array
 * @returns 
 */
function mergeSort(arr, low, high){
    if( low >= high) return;
    let mid = Math.floor((low + high)/2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);
    merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
    const temp = [];
    let left = low;
    let right = mid+1;

    while(left <= mid && right <= high) {
        if(arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    while(left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    while(right <= high) {
        temp.push(arr[right]);
        right++;
    }

    for(let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

const arr = [3,2,8,5,1,4,23];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);