/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    for (let i = 0; i < l1.length; i++) {
        for (let j = 0; j < l2.length; j++) {
            if (l2[j] > l1[i]) {
                l1.splice(0, 0, l2[j])
                break
            }
        }
    } 
    return l1
};
// @lc code=end

