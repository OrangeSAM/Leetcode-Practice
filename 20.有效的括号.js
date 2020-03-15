/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0) return true
    if(s.length % 2 === 1 || s.length === 1) {
        return false
    }
    let arr = []
    let map = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    for (let i = 0; i < s.length;) {
        if (s[i] in map) {
            arr.push(s[i])
        } else if (s[i] === map[arr[arr.length - 1]]){
            arr.pop()
        }
        i++
    }
    return arr.length > 0 ? false : true
};
// @lc code=end

