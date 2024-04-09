function insertionSort(n) {
  for(let i = 0; i < n; i++) {
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
insertionSort(arr)
console.log(arr) // [-6, -2, 4, 8, 20]

// Big-O = (n^2)