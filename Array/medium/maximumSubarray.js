// Leet code: https://leetcode.com/problems/maximum-subarray/description/
// Tuf YT: https://www.youtube.com/watch?v=w_KEocd__20
// Tuf Article: https://takeuforward.org/data-structure/kadanes-algorithm-maximum-subarray-sum-in-an-array/

/** Approach using Kadane's Algorithm
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = 0;

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        max = Math.max(max, sum);
        if(sum < 0) sum = 0;
    }

    return max;
};

// Type 2: get the sub array also
var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = 0;
    let startIndex = i
    let subarrayStart = -1
    let subarrayEnd = -1;
    for(let i = 0; i < nums.length; i++) {
        if(sum === 0) startIndex = i;
        sum += nums[i];
        if(sum > max) {
            max = sum;
            subarrayStart = startIndex;
            subarrayEnd = i
        }
        if(sum < 0) sum = 0;
    }
    
    return max;
};