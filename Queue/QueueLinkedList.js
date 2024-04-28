const LinkedList = require('../LinkedList/LinkedListWithTail');

class Queue {
    constructor() {
        this.list = new LinkedList();
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    getSize() {
        return this.list.getSize();
    }

    print() {
        return this.list.print();
    }

    enqueue(element) {
        this.list.append(element);
    }

    dequeue() {
        return this.list.removeFromFront();
    }

    peek() {
        return this.list.head.data;
    }
}

const queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.getSize());
queue.print();
console.log(queue.dequeue());
queue.print();
console.log(queue.peek());