// GFG: https://bit.ly/3piCTD3;
// Tuf: https://youtu.be/aXQWhbvT3w0

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    addOne(node)
    {
        let carry = this.addHelper(node);
        if(carry === 1) {
            const newNode = new Node(carry);
            newNode.next = head
            node = newNode;
        }
        return node;
    }
    
    addHelper(node) {
        if(!node) return 1;
        
        let carry = this.addHelper(node.next)
        node.data += carry;
        
        if(node.data < 10) return 0;
        node.data = 0;
        return 1;
    }
}