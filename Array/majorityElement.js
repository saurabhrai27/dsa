// Leet code: https://leetcode.com/problems/majority-element/
// Tuf YT: https://youtu.be/nP_ns3uSh80
// Tuf Article: https://takeuforward.org/data-structure/find-the-majority-element-that-occurs-more-than-n-2-times/


/** Approach 1: Time & Space Complexity of O(n)
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hash = new Map();

    for(let i = 0; i < nums.length; i++) {
        if(hash.has(nums[i])){
            hash.set(nums[i], hash.get(nums[i]) + 1)
        } else {
            hash.set(nums[i], 1);
        }
    }

    for(const [num, count] of hash) {
        if(count > nums.length / 2) {
            return num
        }
    }
};

// Approach 2: Using Moore Voting Algo
// Time Complexity O(n), Space O(1)
var majorityElement = function (nums) {
    let count = 0;
    let el;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            count = 1;
            el = nums[i];
        } else if (nums[i] === el) { count++; }
        else { count--; }
    }

    return el;
};


// Approach 3: If majority element is not present
// Time Complexity O(n), Space O(1)
var majorityElement = function (nums) {
    let count = 0;
    let el;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            count = 1;
            el = nums[i];
        } else if (nums[i] === el) { count++; }
        else { count--; }
    }

    count = 0;
    for(let i = 0; i < nums.lenght; i++) {
        if(el === nums[i]) count ++;
    }

    if(count> nums.lenght / 2) return el;
    else return -1;
};