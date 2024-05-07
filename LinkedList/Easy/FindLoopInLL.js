// Leet Code: https://leetcode.com/problems/linked-list-cycle/

/** Approach 1 with hashing
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const hash = new Map();
    let temp = head;
    while(temp) {
        if(hash.get(temp)) return true;
        hash.set(temp, 1);
        temp = temp.next;
    }

    return false;
};

/** Approach 2 using fast and slow pointer
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null) return false;
    if (head.next === null) return false;

    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) return true;
    }

    return false;
};