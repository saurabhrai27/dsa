function selectionSort(n) {
    for(let i = 0; i < n - 1; i++) {
        let minIndex = i
        for(let j = i; j < n; j++) {
            if(arr[j] < arr[minIndex]) { 
                minIndex = j
            }
        }

        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}

const arr = [13,46,24,52,20,9]
selectionSort(arr.length)
console.log(arr);