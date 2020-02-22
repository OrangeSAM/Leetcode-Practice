/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//  i + 1 会遇到两个元素相同却没有办法的问题
//  为 i 会遇到全都给删除的情况
var removeDuplicates = function(nums) {
    let temp = {}
    for (let i = nums.length; i > 0; i--) {
        temp[nums[i]] = true
        if (temp[nums[i - 1]]) {
            nums.splice(i - 1, 1)
        }
    }
    return nums.length
};
// @lc code=end

