/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let toString =  `${x}`
    let toArr = toString.split('')
    let toArrCopy = toString.split('')
    if (toArr[0] === '-') {
        toArr.shift()
    }
    if (toArr[toArr.length -1 ] === '0') {
        toArr.pop()
    }
    toArr = toArr.reverse()
    if (toArrCopy[0] === '-'){
        toArr.unshift('-')
    }

    let finalValue = Number(toArr.join(''))

    if ((finalValue > 2**31-1) || (finalValue < -(2**31 - 1))) {
        return  0
    } else {
        return finalValue
    }
};
// @lc code=end

