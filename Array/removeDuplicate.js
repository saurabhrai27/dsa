// use 2 pointers approach

function removeDuplicate(arr) {
    let i = 0;
    for(let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    arr.splice(i + 1);
}

const arr = [1, 1, 2, 2, 2, 3, 3];
removeDuplicate(arr)
console.log(arr);