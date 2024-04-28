class Stack {
    constructor() {
        this.stack = [];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    getSize() {
        return this.stack.length;
    }

    print() {
        return this.stack.toString();
    }

    pop() {
        if (this.stack.length == 0) return "Underflow"; 
        return this.stack.pop();
    }

    push(element) {
        this.stack.push(element);
    }

    peek() {
        if(!this.isEmpty()) {
            return this.stack[this.stack.length - 1];
        }
        return null;
    }
}

let stack = new Stack(); 
  
console.log(stack.isEmpty());   
console.log(stack.pop());

stack.push(10); 
stack.push(20); 
stack.push(30); 
  
console.log(stack.print()); 
console.log(stack.peek()); 
console.log(stack.pop()); 
console.log(stack.print()); 