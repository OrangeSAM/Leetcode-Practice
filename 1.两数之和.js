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
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    // nums.forEach((e, i) => {
    //     nums.forEach((m, n) => {
    //         if (e + m === target) {
    //             return [i, n]
    //         }
    //     })
    // })
    // 除了抛出异常以外，没有办法中止或跳出 forEach() 循环。
    // 如果你需要中止或跳出循环，forEach() 方法不是应当使用的工具。
    // 因此上述代码没用。
};
// 时间复杂度高，空间复杂度较下者低

// const twoSum = (nums, target) => {
//     const obj = {}
//     for (let i = 0, len = nums.length; i < len; ++i) {
//         const data = nums[i]
//         const res = target - data
//         if (res in obj) {
//             return [obj[res], i]
//         }
//         obj[data] = i
//     }
// }
// 时间复杂度低，空间复杂度高，因为用了对象存储的原因？
// @lc code=end

