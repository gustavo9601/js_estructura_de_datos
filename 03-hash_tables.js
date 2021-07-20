/*
*
* Similares a Objetos
* */

/*
* Metodos
*
* insert  // interta un elemen to en la tabla
* search  // Buscar un elemento por key
* delete  // borrar un elemento
*
* */


class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const address = this.hashMethod(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('name', 'Gustavo');
myHashTable.set('age', 25);
myHashTable.set('age', 26);
console.log("myHashTable", myHashTable);
console.log("myHashTable.data", myHashTable.data)
console.log(myHashTable.get('age'))

