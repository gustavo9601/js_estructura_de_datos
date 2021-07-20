/*
* Arrays => Collecion de informacion
* */

const miBasicArray = [1, 2, 3, 4, 'test']
console.log("miBasicArray", miBasicArray)

/*
* Funciones para editar un array
*
* push // agregar al final
* pop  // borrar el ultimo
* unshift  // agrega al inicio
* shift  // borra el primero
* splice // agregar un elemento en una parte del array
*
* */


class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);

        return item;
    }

    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const myArray = new MyArray();
myArray.push('Primer elemento');
myArray.push('Segundo elemento');
console.log("myArray", myArray);



