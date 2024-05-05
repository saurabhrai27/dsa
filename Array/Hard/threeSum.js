/**
 * Given an array of N integers, your task is to find unique triplets that add up to give a sum of zero.
 * arr = [-1,0,1,2,-1,-4]
 */


/**
 * Brute Force Aproach 
 * Time Complexity : O(N3 * log(no. of unique triplets)), where N = size of the array)
 * Space Complexity: O(2 * no. of the unique triplets) as we are using a set data structure and a list to store the triplets.
 */ 
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
console.log('Brute:');
console.log(tripletBrute(n, arr));

/**
 * Better Solution
 * Time Complexity: O(N2 * log(no. of unique triplets)), where N = size of the array.
 * Space Complexity: O(2 * no. of the unique triplets) + O(N) as we are using a set data structure and a list to store the triplets 
 * and extra O(N) for storing the array elements in another set.
 */

function tripletsBetter(n, arr) {
    let unique = new Set();

    for(let i = 0; i < n; i++) {
        const hash = new Set();
        for(let j = i + 1; j < n; j++) {    
            let third = - (arr[i] + arr[j]);
            if(hash.has(third)) {
                let temp = [arr[i], arr[j], third];
                temp.sort((a,b) => a - b);
                unique.add(JSON.stringify(temp));
            }
            hash.add(arr[j]);
        }
    }

    const result = Array.from(unique).map(item => JSON.parse(item));
    return result;
}

console.log('Better:');
console.log(tripletsBetter(n, arr));

/**
 * Optimal Approach
 * Time Complexity: O(NlogN)+O(N2), where N = size of the array
 * Space Complexity: O(no. of quadruplets), This space is only used to store the answer. We are not using any extra space to solve this problem. 
    So, from that perspective, space complexity can be written as O(1).
 */
function tripletOptimal(n, arr) {
    const result = []
    arr.sort((a, b) => a - b);
    for(let i = 0; i < n; i++) {
        if(i !== 0 && arr[i] === arr[i - 1]) continue;

        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            if(sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                result.push([arr[i], arr[j], arr[k]]);
                // skip the duplicates:
                j++;
                k--;
                while (j < k && arr[j] === arr[j - 1]) j++;
                while (j < k && arr[k] === arr[k + 1]) k--; 
            }
        }
    }
    return result
}

console.log('Optimal:');
console.log(tripletOptimal(n, arr));