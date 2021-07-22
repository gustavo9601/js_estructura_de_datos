/*
*
* FIFO (First In, First Out)
* Primero en entrar, primero en salir
*
* enqueue // agregar elemento al final de la linea
* dequeue // remover al primer elemento de la linea
* pee // tomar el primer elemento de la linea
*
* */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;

        return this;
    }

    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;

        return this;
    }
}

const myQueue = new Queue();
myQueue.enqueue(1)
myQueue.enqueue(10)
myQueue.enqueue(100)
myQueue.enqueue(1000)
console.log("myQueue > ", myQueue)
