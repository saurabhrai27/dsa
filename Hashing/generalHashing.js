// Counting frequencies of array elements

function countFrequency() {
    const hash = new Map();

    for(let i = 0; i < arr.length; i++){
        if(hash.has(arr[i])) {
            hash.set(arr[i], hash.get(arr[i]) + 1)
        } else {
            hash.set(arr[i], 1);
        }
    }
    
    for (const [key, value] of hash) {
        console.log(`Frequency of ${key} is ${value}`);
    }
    // Find the highest/lowest frequency element
    let maxFreq = 0;
    let minFreq = arr[0];
    let maxElement = 0;
    let minElement = 0;

    for(const [key, value] of hash) {
        if(value > maxFreq) {
            maxElement = key;
            maxFreq = value;
        }

        if(value < minFreq) {
            minElement = key;
            minFreq = value
        }
    }

    console.log(`Element: ${maxElement} has hightest frequency: ${maxFreq} && Element: ${minElement} has lowest frequency: ${minFreq}`);
}

const arr = [10,5,10,15,10,5];
countFrequency(arr);

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(!nums.length) return false;

    let freqMap = new Map();

    for(let i = 0; i < nums.length; i++) {
        if(freqMap.has(nums[i])) {
            let numFreq = freqMap.get(nums[i]) + 1;
            if(numFreq >= 2) return true;
            freqMap.set(nums[i],  numFreq);
        } else {
            freqMap.set(nums[i], 1);
        }
    }

    return false;
}