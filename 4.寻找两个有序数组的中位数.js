/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // 两个数组合并后并排序
    // todo 需要考虑数组为纯负值的情况，会导致排序出错
    let tempArr = (nums1.concat(nums2)).sort((a, b) => {return a - b})
    if (tempArr.length % 2 === 1) {
        // 奇数项返回中间那个
        return tempArr[Math.floor(tempArr.length / 2)]
    } else {
        let index = tempArr.length / 2
        return (tempArr[index - 1] + tempArr[index]) / 2
    }
};
// @lc code=end

