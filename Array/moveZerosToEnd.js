// Approach 1
var moveZeroes = function(nums) {
    if(nums.length < 2 ) return;
    let j = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0) {
            nums[j] = nums[i];
            j++;
        }
    }

    for(let i = j; i < nums.length; i++){
        nums[i] = 0;
    }
};
const arr = [0,1,0,3,12];
moveZeroes(arr);
console.log('Approach 1:',arr);

// Approach 2
var moveZeroes2 = function (nums, n) {
    if(n < 2 ) return;
    let j = -1;

    for(let i = 0; i < n; i++) {
        if(nums[i] === 0) {
            j = i;
            break;
        }
    }

    if(j === -1) return nums;

    for(let i = j + 1; i < n; i++) {
        if(nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }

    return nums;
}

const arr2 = [0,1,0,3,12];
console.log('Approach : ',moveZeroes2(arr2, arr2.length));
