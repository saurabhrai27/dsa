// Reverse a array using recursion

function reverseArray(l, r) {
    if(l > r) return;
    let temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp;
    reverseArray(l+1, r-1)
}
const arr = [1,2,3,4,5]
reverseArray(0,4);
console.log(arr);

// Reverse array using one pointer
function reverseArrayOnePointer(i,n) {
    if(i >= Math.floor(n/2)) return;
    let temp = arr2[i]
    arr2[i] = arr2[n-i-1]
    arr2[n-i-1] = temp;
    reverseArrayOnePointer(i+1,n);
}

const arr2 = [1,2,3,4,5]
reverseArrayOnePointer(0,5)
console.log(arr2);
