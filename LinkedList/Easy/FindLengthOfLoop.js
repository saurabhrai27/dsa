// Tuf : https://www.youtube.com/watch?v=I4g1qbkTPus

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
var findCycleLengthBrute = function(head) {
    if(!head) return 0;

    const hash = new Map();
    let temp = head;
    let len = 1
    while(temp) {
        if(hash.get(temp)) {
            return len - hash.get(temp)
        }
        hash.set(temp, len);
        len++;
        temp = temp.next;
    }

    return 0;
};

/** Approach 2 using fast and slow pointer
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function findLength(slowPointer, fastPointer) {
    let len = 1;
    fastPointer = fastPointer.next;
    while (slowPointer !== fastPointer) {
        len++;
        fastPointer = fastPointer.next;
    }
    return len;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var findCycleLengthOptimal = function(head) {
    if (head === null) return 0;

    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            let len = findLength(slow, fast)
        }
    }

    return 0;
};