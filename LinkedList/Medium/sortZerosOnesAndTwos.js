// gfg: https://www.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=given-a-linked-list-of-0s-1s-and-2s-sort-it
// Tuf: https://takeuforward.org/data-structure/add-two-numbers-represented-as-linked-lists/

/** Approach one
 * @param {Node} head
 * @returns {Node}
*/

class Solution {
    //Function to sort a linked list of 0s, 1s and 2s.
    segregate(head)
    {
        //your code here
        let temp = head;
        let zeros = 0;
        let ones = 0;
        let twos = 0;
        
        while(temp) {
            if(temp.data === 0) {
                zeros++
            } else if(temp.data === 1) {
                ones++;
            } else {
                twos++;
            }
            
            temp = temp.next
        }
        
        temp = head;
        
        while(temp) {
            if(zeros !== 0) {
                temp.data = 0;
                zeros--;
            } else if(ones !== 0) {
                temp.data = 1;
                ones--;
            } else {
                temp.data = 2;
                twos--;
            }
            
            temp = temp.next;
        }
        
        return head;
    }
}

//Approach 2:
class Solution {
    //Function to sort a linked list of 0s, 1s and 2s.
    segregate(head)
    {
        //your code here
        let zerosHead = new Node(-1);
        let onesHead = new Node(-1);
        let twosHead = new Node(-1);
        
        let temp = head;
        let zeros = zerosHead;
        let ones = onesHead;
        let twos = twosHead;
        
        while(temp) {
            if(temp.data === 0){
                zeros.next = temp;
                zeros = temp;
            } else if(temp.data === 1) {
                ones.next = temp;
                ones = temp;
            }else {
                twos.next = temp;
                twos = temp;
            }
            temp = temp.next;
        }
        
        
        zeros.next = onesHead.next ? onesHead.next : twosHead.next;
        ones.next = twosHead.next;
        twos.next = null;
        
        return zerosHead.next;
    }
}