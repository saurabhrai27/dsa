// Leet code: https://leetcode.com/problems/sort-colors/
// tuf YT: https://www.youtube.com/watch?v=tp8JIuCXBaU
// Tuf article: https://takeuforward.org/data-structure/sort-an-array-of-0s-1s-and-2s/


/**
 * Approach 1
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zeroPtr = 0;
    let onePtr = 0;
    let twoPtr = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) zeroPtr++;
        else if(nums[i] === 1) onePtr++;
        else twoPtr++;
    }

    for(let i = 0; i < nums.length; i++) {
        if(zeroPtr) {
            nums[i] = 0;
            zeroPtr--;
        } else if(onePtr) {
            nums[i] = 1
            onePtr--;
        }  else if(twoPtr){
            nums[i] = 2;
            twoPtr--;
        }
    }
};


/**
 * Approach 2 using Dutch national flag algorithm
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            swap(nums, low, mid);
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            swap(nums, mid, high);
            high--;
        }
    }
};

var swap = function (arr, a, b) {
    let temp = arr[b];
    arr[b] = arr[a];
    arr[a] = temp;
}