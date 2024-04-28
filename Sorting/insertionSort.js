/**
 * We have to start with second element of the array as first element in the array is assumed to be sorted.
  Compare second element with the first element and check if the second element is smaller then swap them.
  Move to the third element and compare it with the second element, then the first element and swap as necessary to put it in the correct position among the first three elements.
  Continue this process, comparing each element with the ones before it and swapping as needed to place it in the correct position among the sorted elements.
  Repeat until the entire array is sorted.
 * @param {*} n 
 */

function insertionSort(n) {
  for(let i = 1; i < n; i++) {
    let j = i;
    while(j > 0 && arr[j - 1] > arr[j]){
      let temp = arr[j-1];
      arr[j-1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
}

const arr = [8, 20, -2, 4, -6]
insertionSort(arr.length)
console.log(arr) // [-6, -2, 4, 8, 20]

// Big-O = (n^2)