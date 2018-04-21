class Stack {
    /**
     * Создает стопку, опционально принимая элементы для добавления
     * @param {...*} [items] Добавляемые элементы
     */
    constructor(...items) {
        this._store = items;
    }

    /**
     * Возвращает количество элементов в стопке
     * @returns {number}
     */
    get size() {
        return this._store.length;
    }

    /**
     * Возвращает `true` если стопка пустая, и `false` если стопка не пустая
     * @returns {boolean}
     */
    get isEmpty() {
        return this._store.length === 0;
    }

    /**
     * Добавляет элемент в стопку
     * @param {*} item
     */
    push(item) {
        this._store.push(item);
    }

    /**
     * Удаляет элемент из стопки и возвращает его
     * @returns {*}
     */
    pop() {
        return this._store.pop();
    }

    /**
     * Возвращает последний элемент в стопке не удаляя его
     * @returns {*}
     */
    peek() {
        return this._store[this.size - 1];
    }
}

module.exports = Stack;