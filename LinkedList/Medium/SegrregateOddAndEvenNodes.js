// Leet Code: https://leetcode.com/problems/odd-even-linked-list/description/
// Tuf: https://www.youtube.com/watch?v=qf6qp7GzD5Q

/** Brute Force
 * Time Complexity: O(n/2) + O(n/2) + O(n) = 2 O(n)
 * Space Complexity: O(n)
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
var oddEvenList = function(head) {
    if(!head) return head;
    const arr = []
    let temp = head;

    while(temp && temp.next) {
        arr.push(temp.val);
        temp = temp.next.next;
    }
    if(temp) arr.push(temp.val);

    temp = head.next;
    while(temp && temp.next) {
        arr.push(temp.val);
        temp = temp.next.next;
    }
    if(temp) arr.push(temp.val);

    temp = head;
    let i = 0;
    while(temp) {
        temp.val = arr[i];
        i++;
        temp = temp.next;
    }

    return head;
};

/** Optimal Approach
 * Time Complexity: O(n)
 * Space Complexity: O(1)
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
var oddEvenList = function(head) {
    if(!head || !head.next) return head;

    let oddPtr = head;
    let evenPtr = head.next;
    let evenHead = head.next;

    while(evenPtr && evenPtr.next) {
        oddPtr.next = oddPtr.next.next;
        evenPtr.next = evenPtr.next.next;

        oddPtr = oddPtr.next;
        evenPtr = evenPtr.next;
    }
    oddPtr.next = evenHead;
    return head;
};