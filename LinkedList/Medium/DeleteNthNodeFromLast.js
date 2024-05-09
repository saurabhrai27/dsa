// LeetCode : https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
// Tuf: https://takeuforward.org/data-structure/remove-n-th-node-from-the-end-of-a-linked-list/
// Tuf YT : https://youtu.be/3kMKYQ2wNIU

/** 
 * Time Complexity: O(n) && Space Complexity: O(1)
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head) return head;
    
    let fast = head;
    let slow = head;

    for(let i = 0; i < n; i++) {
        fast = fast.next;
    }
    if(!fast) return head.next;

    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    return head;
};