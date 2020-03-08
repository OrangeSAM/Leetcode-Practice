/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let valley = Number.MAX_SAFE_INTEGER;
    let max = 0;
    for(var i = 0;i <prices.length;i++){
        if(prices[i] < valley){
            valley = prices[i];
        }else{
            max = Math.max(max,prices[i] - valley);
        }
    }
    return max;
};
// @lc code=end

