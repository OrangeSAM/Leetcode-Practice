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
    if(s.length % 2 === 1 || s.length === 1) {
        return false
    }
    let map = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }
    if (map[s[1]] === s[0]) {
        // 紧挨着对称
        for (let i = 0; i < s.length - 1;) {
            if (map[s[i + 1]] === s[i] ) {
                i = i + 2
            } else {
                return false
            }
        }
        return true
    } else if (s[0] === map[s[s.length - 1]]){
        // 嵌套堆成
        for(let i = 0; i < s.length / 2;) {
            if (s[i] === map[s[s.length - 1 - i]]) {
                i ++ 
            } else {
                return false
            }
        }
        return true
    }
    return false
};
// @lc code=end

