// Leet code: https://leetcode.com/problems/sort-list/
// Tuf: https://youtu.be/8ocB7a_c-Cc

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
var sortList = function(head) {
    if (!head || !head.next) {
        return head;
    }

    let middle = findMiddle(head);
    let rightHead = middle.next;
    let leftHead = head;
    middle.next = null;

    leftHead = sortList(leftHead);
    rightHead = sortList(rightHead);
   
    return mergeList(leftHead, rightHead);    
};

const findMiddle = function (head) {
    let slow = head;
    let fast = head.next;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

const mergeList = function (list1, list2) {
    let dummyNode = new ListNode(-1);
    let tempNode = dummyNode;
    while(list1 && list2) {
        if(list1.val < list2.val) {
            tempNode.next = list1;
            tempNode = list1;
            list1 = list1.next;
        } else {
            tempNode.next = list2;
            tempNode = list2;
            list2 = list2.next;
        }
    }

    if(list1) tempNode.next = list1;
    else tempNode.next = list2;
    
    return dummyNode.next;
}