// GFG: https://bit.ly/3zWPiBj
// Tuf YT: https://www.youtube.com/watch?v=YitR4dQsddE


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

    findPairsWithGivenSum(head, target) {
        if(!head) return
        let left = head;
        let right = this.findTail(head);
        const pairs = [];

        while(left.data < right.data) {
            let sum = left.data + right.data;
            if(sum === target) {
                pairs.push([left.data, right.data]);
                right = right.prev;
                left = left.next;
            } else if (sum < target) {
                left = left.next;
            } else {
                right = right.next;
            }
        }

        return pairs;
    }

    findTail(head) {
        let tail = head;

        while(tail.next) {
            tail = tail.next;
        }

        return tail;
    }
}