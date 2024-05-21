// Leet code: https://leetcode.com/problems/rotate-list/description/
// Tuf Article: https://takeuforward.org/data-structure/rotate-a-linked-list/
// Tuf YT: https://www.youtube.com/watch?v=uT7YI7XbTY8

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || k === 0) return head;

    let tail = head;
    let len = 1;
    while(tail.next) {
        tail = tail.next;
        len++;
    }

    if(k % len === 0) return head;
    k = k % len;
    tail.next = head;
    let newLastNode = findLastNode(head, len - k);
    head = newLastNode.next;
    newLastNode.next = null;

    return head;
};

var findLastNode = function(temp, k) {
    let count = 1;
    while(temp) {
        if(count === k) return temp;
        temp = temp.next;
        count++;
    }

    return temp;
}