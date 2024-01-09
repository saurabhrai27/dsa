function bubbleSort(arr, n)
{
    var i, j, temp;
    var swapped;
    for (i = 0; i < n - 1; i++) 
    {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) 
        {
            if (arr[j] > arr[j + 1]) 
            {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
 
        // IF no two elements were 
        // swapped by inner loop, then break
        if (swapped == false)
        break;
    }
}
const arr = [8, 20, -2, 4, -6];
const arr2 = [6, 3, 0, 5];

bubbleSort(arr, arr.length);
console.log(arr);
bubbleSort(arr2, arr2.length);
console.log(arr2);


// Using do while
function bubbleSort2(arr) {
    let swapped
    do {
      swapped = false
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = temp
          swapped = true
        }
      }
    } while (swapped)
}

// Big-O = (n^2)