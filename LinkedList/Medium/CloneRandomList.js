// Leet code: https://leetcode.com/problems/copy-list-with-random-pointer/
// Tuf YT: https://www.youtube.com/watch?v=q570bKdrnlw
// Tuf Article: https://takeuforward.org/data-structure/clone-linked-list-with-random-and-next-pointer/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head) return head;
    let temp = head;

    while(temp) {
        let copyNode = new Node(temp.val, temp.next, null);
        temp.next = copyNode;
        temp = temp.next.next;
    }

    temp = head;
    while(temp){
        if(temp.random){
            temp.next.random = temp.random.next;
        }
        temp = temp.next.next;
    }

    let dummyNode = new Node(0, null, null);
    let copyNode = dummyNode;
    temp = head;
    while(temp) {
        copyNode.next = temp.next;
        copyNode = copyNode.next;
        temp.next = temp.next.next;
        temp = temp.next;
    }

    return dummyNode.next
};