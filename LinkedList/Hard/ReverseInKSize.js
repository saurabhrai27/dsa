// Leet code: https://leetcode.com/problems/reverse-nodes-in-k-group/
// Tuf Article: https://takeuforward.org/data-structure/reverse-linked-list-in-groups-of-size-k/
// Tuf YT: https://youtu.be/lIar1skcQYI

var reverseKGroup = function (head, k) {
    let temp = head;
    let prevNode;

    while(temp){
        let kthNode = getKthNode(temp, k);
        if(!kthNode) {
            if(prevNode) prevNode.next = temp;
            break;
        }
        let nextNode = kthNode.next;
        kthNode.next = null;

        reverseList(temp);
        if(head === temp) {
            head = kthNode;
        } else {
            prevNode.next = kthNode;
        }
        prevNode = temp;
        temp = nextNode;
    }
}

var getKthNode = function (currNode, k) {
    k -= 1;
    while (currNode && k > 0) {
        k--;
        currNode = currNode.next;
    }
    return currNode;
};

var reverseList = function (head) {
    if (!head) return head;

    let temp = head;
    let prevNode = null;

    while (temp) {
        let nextNode = temp.next;
        temp.next = prevNode;
        prevNode = temp;
        temp = nextNode;
    }
    return prevNode;
};