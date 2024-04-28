class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size;
    }

    getSize() {
        return this.size;
    }

    prepend(data) {
        const node = new Node(data);

        if(this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(data) {
        const node = new Node(data);

        if(this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next;
            }
            prev.next = node
        }
        this.size++;
    }

    insert(index, data) {
        if(index === 0 || index > this.size) {
            return;
        } else if(index === 0) {
            this.prepend(data)
        } else {
            const node = new Node(data);
            let prev = this.head;
            for(let i = 0; i < index - 1; i++ ){
                prev = prev.next
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    remove(index) {
        if(index < 0 || index > this.size) {
            return;
        }
        let removedNode;
        if(index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;

            for(let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode;
    }

    removeData(data) {
       if(this.isEmpty()) {
        return 'List is empty'
       }
       if(this.head.data === data) {
        this.head = this.head.next;
        this.size--;
        return data
       } else {
        let removedNode;
        let prev = this.head;

        while(prev.next && prev.next.data !== data) {
            prev = prev.next;
        }
        if(prev.next) {
            removedNode = prev.next;
            prev.next = removedNode.next;
            this.size--;
            return data;
        }
       }
       return null;
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


}