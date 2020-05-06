/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.indexOf(target) !== -1) {
        return nums.indexOf(target)
    } else {
        for(let i = nums.length - 1; i >= 0; i--) {
			if (target > nums[i]) {
                return i + 1
            } else if (i === 0 ){
                return i
            }
        }
    }
};
// @lc code=end

