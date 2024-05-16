// GFG: https://bit.ly/3zuBr66
// Tuf: https://bit.ly/3zuBr66

/*
  class Node {
    constructor(val) {
        this.data = val;
        this.prev = null;
        this.next = null;
    }
}

integer key
head node head_ref
return head node

*/

class Solution {

    deleteAllOccurOfX(head_ref, key) {
        if(!head_ref) return
        let temp = head_ref;
        
        while(temp) {
            if(temp.data === key) {
                if(temp === head_ref) {
                    head_ref = temp.next;
                }
                let nextNode = temp.next;
                let prevNode = temp.prev;
                if(nextNode) nextNode.prev = prevNode;
                if(prevNode) prevNode.next = nextNode;
            }
            temp = temp.next;
        }
        
        return head_ref;
    }
}