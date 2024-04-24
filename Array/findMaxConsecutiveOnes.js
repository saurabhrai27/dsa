/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let current = 0;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === 1){
            current++;
        } else {
            current = 0;
        }
        max = Math.max(max, current);
    }
    return max;
};

console.log(findMaxConsecutiveOnes([1,1,1,0,1,1,0,0,0,1,1,1,1]));