// GFG: https://bit.ly/3w9TKf8
// Tuf Article: https://takeuforward.org/data-structure/flattening-a-linked-list/
// Tuf YT: https://www.youtube.com/watch?v=ykelywHJWLg

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
    this.bottom = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {Node}
*/

class Solution {
    
    flatten(head)
    {
        //your code here
        if(!head || !head.next) return head;
        
        let mergedHead = this.flatten(head.next);
        return this.mergeList(head, mergedHead);
    }
    
    mergeList(l1, l2) {
        let dummyNode = new Node(-1);
        let res = dummyNode;
        
        while(l1 && l2) {
            if(l1.data < l2.data) {
                res.bottom = l1;
                res = l1;
                l1 = l1.bottom;
            } else {
                res.bottom = l2;
                res = l2;
                l2 = l2.bottom;
            }
            res.next = null;
        }
        
        if(l1) res.bottom = l1;
        else res.bottom = l2;
        return dummyNode.bottom;
    }
    
}