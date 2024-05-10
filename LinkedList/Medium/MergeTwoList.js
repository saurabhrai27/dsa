// Merge two sorted linked list
// Tuf YT: https://youtu.be/jXu-H7XuClE?si=lYwpsC1_pL27FECQ


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
function mergeList(list1, list2) {
    let dummyNode = new Node(-1);
    let temp = dummyNode;
    let t1 = list1;
    let t2 = list2;

    while(t1 && t2) {
        if(t1.value < t2.vale) {
            temp.next = t1;
            temp = t1;
            t1.next;
        } else {
            temp.next = t2;
            temp = t2;
            t2 = t2.next;
        }
    }

    if(t1) temp.next = t1;
    else temp.next = t2;

    return dummyNode.next;
}