const checkEmpty = require('../util').checkEmpty;
const EMPTY_MESSAGES = require('../util').EMPTY_MESSAGES;

class Queue {
    /**
     * Создает очередь, опционально принимая элементы для добавления
     * @param {...*} [items] Добавляемые элементы
     */
    constructor(...items) {
        this._store = items;
    }

    /**
     * Возвращает количество элементов в очереди
     * @returns {number}
     */
    get size() {
        return this._store.length;
    }

    /**
     * Возвращает `true` если очередь пустая, в противном случае возвращает `false`
     * @returns {boolean}
     */
    get isEmpty() {
        return this._store.length === 0;
    }

    /**
     * Возвращает первый элемент в очереди
     * @returns {*}
     */
    get front() {
        checkEmpty(this.isEmpty, EMPTY_MESSAGES.queue);
    
        return this._store[0];
    }

    /**
     * Возвращает последний элемент в очереди
     * @returns {*}
     */
    get back() {
        checkEmpty(this.isEmpty, EMPTY_MESSAGES.queue);

        return this._store[this.size - 1];
    }

    /**
     * Добавляет элемент в очередь
     * @param {*} item 
     */
    enqueue(item) {
        this._store.push(item);
    }

    /**
     * Удаляет первый элемент из очереди и возвращает его
     * @returns {*}
     */
    dequeue () {
        checkEmpty(this.isEmpty, EMPTY_MESSAGES.queue);

        return this._store.shift();
    }
}

module.exports = Queue;