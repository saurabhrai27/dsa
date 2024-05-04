/**
 * Given an array of N integers, your task is to find unique triplets that add up to give a sum of zero.
 * arr = [-1,0,1,2,-1,-4]
 */


// Brute Force Aproach
function tripletBrute(n, arr) {
    let unique = new Set();
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++){
            for(let k = j + 1; k < n; k++) {
                if(arr[i] + arr[j] + arr[k] === 0){
                    let temp = [arr[i], arr[j], arr[k]];
                    temp.sort((a, b) => a -b);
                    unique.add(JSON.stringify(temp));
                }
            }
        }
    }

    let result = Array.from(unique).map(item => JSON.parse(item));
    return result;
}

const arr = [-1,0,1,2,-1,-4];
const n = arr.length;
console.log(tripletBrute(n, arr));