// Leet Code: https://leetcode.com/problems/palindrome-linked-list/description/
// Tuf: https://takeuforward.org/data-structure/check-if-given-linked-list-is-plaindrome/

/**  BRUTE FORCE Approach
 *  Time Complexity: O(2 * N) This is because we traverse the linked list twice: once to push the values onto the stack, 
and once to pop the values and compare with the linked list. Both traversals take O(2*N) ~ O(N) time.
 * Space Complexity: O(N) We use a stack to store the values of the linked list, and in the worst case, the stack will have all N values,  ie. storing the complete linked list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
* @param {ListNode} head
* @return {boolean}
*/
var isPalindrome = function(head) {
   if(!head) return false;

   const hash = [];
   let temp = head;

   while(temp) {
       hash.push(temp.val);
       temp = temp.next;
   }
   temp = head;
   while(temp) {
       if(temp.val !== hash.pop()) return false;
       temp = temp.next;
   }

   return true;
};


/** OPTIMAL Approach
 * Time Complexity: O (2* N) The algorithm traverses the linked list twice, dividing it into halves. 
    During the first traversal, it reverses one-half of the list, and during the second traversal, 
    it compares the elements of both halves. As each traversal covers N/2 elements, 
    the time complexity is calculated as O(N/2 + N/2 + N/2 + N/2), which simplifies to O(2N), ultimately representing O(N). 
 * Space Complexity: O(1) The approach uses a constant amount of additional space regardless of the size of the input linked list. 
    It doesn't allocate any new data structures that depend on the input size, resulting in a space complexity of O(1).
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head) return false;

    let slow = head;
    let fast = head;

    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let newHead = reverseLL(slow.next);
    let headPtr = head;
    let tailPtr = newHead;

    while(tailPtr){
        if(headPtr.val !== tailPtr.val) {
            reverseLL(newHead);
            return false;
        }

        headPtr = headPtr.next;
        tailPtr = tailPtr.next;
    }

    reverseLL(newHead);
    return true;
};

function reverseLL(head) {
    let temp = head;  
    let prev = null;  
    while (temp) {  
        let front = temp.next;  
        temp.next = prev;  
        prev = temp;
        temp = front;  
    }

    return prev;  
}