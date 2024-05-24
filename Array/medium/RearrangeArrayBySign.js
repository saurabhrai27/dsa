// Leet code: https://leetcode.com/problems/rearrange-array-elements-by-sign/description/
// Tuf YT: https://youtu.be/h4aBagy4Uok
// Tuf Article: https://takeuforward.org/arrays/rearrange-array-elements-by-sign/


/** Type 1 when number of +ve and -ve elements are equals
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let positiveIdx = 0;
    let negativeIdx = 1;
    let n = nums.length;
    let result = new Array(n).fill(0);
    for(let i = 0; i < n; i++) {
        if(nums[i] < 0) {
            result[negativeIdx] = nums[i];
            negativeIdx += 2;
        } else {
            result[positiveIdx] = nums[i];
            positiveIdx += 2;
        }
    }

    return result
};

/** Type 2 when number of +ve and -ve elements are not equals
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const positiveArr = [];
    const negativeArr = [];
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < 0) {
            negativeArr.push(nums[i]);
        } else {
            positiveArr.push(nums[i]);
        }
    }

    let posArrLen = positiveArr.length;
    let negArrLen = negativeArr.length;
    
    if(posArrLen > negArrLen) {
        for(let i = 0; i < negArrLen; i++) {
            nums[i * 2] = positiveArr[i]
            nums[i * 2 + 1] = negativeArr[i];
        }
        let index = negArrLen * 2;

        for(let i = negArrLen; i < posArrLen; i++) {
            nums[index] = positiveArr[i];
            index++;
        }
    } else {
        for(let i = 0; i < posArrLen; i++) {
            nums[i * 2] = positiveArr[i];
            nums[i * 2 + 1] = negativeArr[i];
        }

        let index = posArrLen * 2;
        for(let i = posArrLen; i < negArrLen; i++) {
            nums[index] = negativeArr[i];
            index++;
        }
    }

    return nums
};