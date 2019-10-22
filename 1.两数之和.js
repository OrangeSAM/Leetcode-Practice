/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    nums.forEach((e, i) => {
        nums.forEach((m, n) => {
            if (e + m === 9) {
                return [i, n]
            }
        })
    })
};
// @lc code=end

