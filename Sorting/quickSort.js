function quickSort(arr, low, high) {
    if (low < high) {
        partionIndex = partion(arr, low, high);
        quickSort(arr, low, partionIndex - 1);
        quickSort(arr, partionIndex + 1, high);
    }
}

function partion(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) {
            i++;
        }

        while (arr[j] >= pivot && j >= low + 1) {
            j--;
        }

        if (i < j) swap(arr, i, j);
    }
    swap(arr, low, j);
    return j;
}

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

const arr = [4, 6, 2, 5, 7, 9, 1, 3];
quickSort(arr, 0, arr.length - 1);
console.log(arr);