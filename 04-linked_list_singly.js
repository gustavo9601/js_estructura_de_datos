/*
* Singly linked list
*
* son simplemente un conjunto de nodos ordenados que contienen los valores que necesitemos (numbers, strings, boolean, etc).
* Cada uno tiene un valor y una referencia a un siguiente nodo.
*
*
* prepend  // agregar un nodo al inicio
* append  // Agregar un Nodo al final
* lookup || search  // Buscar un nodo recorriendo toda la lista
* insert  // Inserta un nodo en la lista en el orden definidio
* delete // elimina un nodo
*
* */

// * head -> node -> node -> tail -> null;
// Ejemplo de como se veria un objeto de una sola via (singly)
let singlyLinkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null,
                },
            },
        },
    },
};

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };
        // Inicializa la cola al head
        this.tail = this.head;
        // Conteo de elementos, cuando se inicialice se creara 1 por default
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;
    }

    insert(index, value) {
        // Si es un indice que no existe, se adiciona el nuevo al final
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length++;

        return this;
    }

    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
}

let myLinkedList = new MySinglyLinkedList(1);

myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(10);
myLinkedList.append(100);
myLinkedList.prepend(0);
myLinkedList.insert(100, 50);
console.log("myLinkedList", myLinkedList)
