/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let toArr = s.split("")
    // 最终结果
    let count = 0
    toArr.forEach((e, i) => {
        if (((e === 'I') || (e === 'X') || (e === 'C')) && (map[e] < map[toArr[i+1]])) {
            switch(e) {
                case 'I' :
                    count = count - 1
                    break;
                case 'X' :
                    count = count - 10
                    break;
                case 'C' :
                    count = count - 100
            }
        } else {
            count =  count + map[e]
        }
    })
    return count
};
// @lc code=end

