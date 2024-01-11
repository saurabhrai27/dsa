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