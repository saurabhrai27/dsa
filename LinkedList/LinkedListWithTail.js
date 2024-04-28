class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    search(data) {
        if(this.isEmpty()) {
            return -1;
        }

        let i = 0;
        let current = this.head;
        while(current) {
            if(current.data === data) {
                return i;
            }
            current = current.next;
            i++;
        }

        return -1;
    }

    reverse() {
        let prev = null;
        let current = this.head;

        while(current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next
        }
        this.head  = prev;
    }

    print() {
        if(this.isEmpty()) {
            console.log('List is empty')
        } else {
            let current = this.head;
            let listValues = '';
            while(current) {
                listValues += `${current.data} `;
                current = current.next
            }
            console.log(listValues);
        }
    }

    prepend(data) {
        const node = new Node(data);
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node
        }
        this.size++;
    }

    append(data) {
        const node = new Node(data);

        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    removeFromFront() {
        if(this.isEmpty()){
            return "List is empty";
        }
        const data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data
    }

    removeFromEnd() {
        if(this.isEmpty()){
            return "List is empty";
        }

        const data = this.tail.data;
        if(this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = this.head;
            while(prev.next !== this.tail) {
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev
        }
        this.size--;
        return data;
    }

    reverse() {
        let current = this.head;
        let prev = null;
        let next = null;
        while (current) {
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
        }
        this.tail = this.head;
        this.head = prev;
      }
}


// const list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.prepend(0);
// list.print();
// console.log(list.getSize());
// list.removeFromFront();
// list.print();
// list.removeFromEnd();
// list.print();

module.exports = LinkedList;