// Leet Code: https://leetcode.com/problems/linked-list-cycle-ii/description/
// TUF: https://takeuforward.org/data-structure/starting-point-of-loop-in-a-linked-list/

/** Brute Fore Approach
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycleBrute = function(head) {
    if(!head) return null;

    const hash = new Map();
    let temp = head;

    while(temp) {
        if(hash.get(temp)) {
            return temp;
        }

        hash.set(temp, true);
        temp = temp.next
    }

    return null;
};

/** Brute Fore Approach
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycleOptimal = function(head) {
    if(!head) return null;
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
            slow = head;
            while(slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }

            return slow;
        }
    }

    return null;
};