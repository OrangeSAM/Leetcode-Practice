/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let returnVal = false
    let val = String(x).split('').reverse()
    let valCopy = String(x)
    if (val.join('') === valCopy) {
        return true
    } else {
        return false
    }   
};
// @lc code=end

