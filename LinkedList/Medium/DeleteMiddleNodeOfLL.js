//Leet code: https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/
// Tuf YT: https://youtu.be/ePpV-_pfOeI

/** Optimal
 * Time && Space Complexity : O(n/2) && O(1)
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(!head || !head.next) return null;
    
    let slow = head;
    // skipping one step show that slow stops one node before the middle
    let fast = head.next.next;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    slow.next = slow.next.next;
    return head;
};

// Optimal with 3 variables
var deleteMiddle = function(head) {
    if(!head || !head.next) return null;
    let slow = head;
    let fast = head;
    let prev = null;

    while(fast && fast.next){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = prev.next.next;
    return head;
};
