// Leet Code : https://leetcode.com/problems/reverse-linked-list/description/

/**
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
var reverseList = function(head) {
    if(!head) return head;

    let temp = head;
    let prevNode = null;

    while(temp) {
        let nextNode = temp.next;
        temp.next = prevNode;
        prevNode = temp;
        temp = nextNode;
    }
    // head = prevNode;
    return prevNode;
};

/** Recurive approach
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
var reverseListRecursive = function(head) {
    if(head === null || head.next === null) return head;

    let newNode = reverseListRecursive(head.next);
    let front = head.next;
    front.next = head;
    head.next = null;
    return newNode;
};