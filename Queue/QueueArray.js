class Queue {
    constructor() {
        this.queue = []
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }

    enqueue(element) {
        this.queue.push(element);
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        if(!this.isEmpty()){
            return this.queue[0];
        }
        return null;
    }

    print() {
        if(this.isEmpty()) {
            console.log('Queue is empty');
        }
        console.log(this.queue.toString());
    }
}

const queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
queue.print();