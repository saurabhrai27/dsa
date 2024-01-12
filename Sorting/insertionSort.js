function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

const arr = [8, 20, -2, 4, -6]
insertionSort(arr)
console.log(arr) // [-6, -2, 4, 8, 20]

// Big-O = (n^2)