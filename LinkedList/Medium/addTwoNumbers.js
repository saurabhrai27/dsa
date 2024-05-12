// Leet code: https://leetcode.com/problems/add-two-numbers/
// Tuf: https://takeuforward.org/data-structure/add-two-numbers-represented-as-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyNode = new ListNode(-1);
    let current = dummyNode;
    let temp1 = l1;
    let temp2 = l2;
    let carry = 0
    while(temp1 || temp2) {
        let sum = carry;
        if(temp1) sum += temp1.val;
        if(temp2) sum += temp2.val;

        let newNode = new ListNode(sum % 10);
        current.next = newNode;
        current = current.next;

        carry = Math.floor(sum / 10);
        if(temp1) temp1 = temp1.next;
        if(temp2) temp2 = temp2.next;
    }

    if(carry) {
        const newNode = new ListNode(carry);
        current.next = newNode;
    }

    return dummyNode.next;
};