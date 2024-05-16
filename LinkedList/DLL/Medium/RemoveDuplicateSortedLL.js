//gfg: https://bit.ly/3FtJUtZ
// Tuf YT: https://youtu.be/YJKVTnOJXSY

/**
 * Node Class
 * @param {any} data - value stored in node
 * @class
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Solution {
    /**
     * Function to remove duplicates from unsorted linked list.
     * @param {Node} head
     * @returns {Node}
     */
    removeDuplicates(head) {
        let temp = head;
        
        while(temp && temp.next) {
            let nextNode = temp.next;
            
            while(nextNode && nextNode.data === temp.data) {
                nextNode = nextNode.next;
            }
            
            temp.next = nextNode;
            if(nextNode) nextNode.prev = temp;
            temp = temp.next;
        }
        
        return head;
    }
}