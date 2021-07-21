/*
*
*  Doubly Linked List
*
* Una doubly linked list tiene el mismo comportamiento que una simply linked list,
* pero con la particularidad de que esta SI puede regresar. Aún necesita ir moviéndose
* una por una, pero ahora si lo desea puede regresar porque ya conoce quién es su
* elemento anterior y también quién es el siguiente, es decir, ya no es necesario repetir el ciclo.
*
* */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        };
        this.tail = this.head;

        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;

        return this;
    }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);
myDoublyLinkedList.append(50);
myDoublyLinkedList.append(100);
console.log("myDoublyLinkedList", myDoublyLinkedList)
