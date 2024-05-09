// Leet Code: https://leetcode.com/problems/intersection-of-two-linked-lists/description/
// Tuf: https://takeuforward.org/data-structure/find-intersection-of-two-linked-lists/
// Tuf YT: https://www.youtube.com/watch?v=0DYoPz2Tpt4&t=7s

/** Optimal
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    let d1 = headA;
    let d2 = headB;

    while (d1 !== d2) {
        d1 = !d1 ? headB : d1.next;
        d2 = !d2 ? headA : d2.next;
    }

    return d1;
}

// Above solution is improved syntactically
var getIntersectionNode = function(headA, headB) {
    if(headA===null || headB===null) {
        return null;
    }
    
    let currA = headA;
    let currB = headB;
    while (currA !== currB) {
        currA = currA.next
        currB = currB.next
        if(currA === currB) {
            return currA;
        }
        if(currA === null) {
            currA = headB            
        }
        if(currB === null) {
            currB = headA
        }
    }
    return currA
};