/*
*
* LIFO (Last In, First Out)
* Ultimo en entrar, ulitmo en salir
*
* pop  // remover el ulitmo elemento
* push // agrega elemento
* peek // toma el ultimo elemento de la linea, pero no lo eleimina
*
* */


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.length++;

        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }

        if (this.top === this.bottom) {
            this.bottom = null;
        }

        this.top = this.top.next;
        this.length--;

        return this;
    }
}

const myStack = new Stack();
myStack.push(1)
myStack.push(2)
myStack.push(100)
console.log("myStack", myStack)
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
console.log("myStack", myStack)

