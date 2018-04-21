const indexOf = require('../util').indexOf;
class Set {
    /**
     * Создает сет, опционально принимая элементы для добавления
     * @param {...*} [items] Добавляемые элементы
     */
    constructor(...items) {
        this._store = items;
    }

    /**
     * Возвращает количество элементов в сете
     * @returns {number}
     */
    get size() {
        return this._store.length;
    }

    /**
     * Возвращает массив элементов сета
     * @returns {Array}
     */
    get values() {
        return [...this._store];
    }

    /**
     * Добавляет элемент в сет
     * @param {*} item
     */
    add(item) {
        if(!this.has(item)) {
            this._store.push(item) 
        }
    }

    /**
     * Проверяет наличие элемента в сете
     * Поддерживает сравнение объектов (объекты со вложенностью 1), массивы не поддерживаются
     * @param {*} item
     * @returns {boolean}
     */
    has(item) {
        if (item instanceof Object) {
            return indexOf(this._store, item) >= 0 ? true : false;
        }

        return this._store.includes(item);
    }

    /**
     * Удаляет элемент из сета и возвращает `true` если элемент удален и `false` если нет
     * @param {*} item
     * @returns {boolean}
     */
    remove(item) {
        if (!this.has(item)) {
            return false;
        }

        const indexOfSearchItem = indexOf(this._store, item);
        this._store.splice(indexOfSearchItem, 1);

        return true;
    }

    /**
     * Удаляет все элементы в сете
     */
    clear() {
        this._store = [];
    }

    /**
     * Возращает сет состоящий из элементов двух сетов
     * @param {Set} set
     * @returns {Set}
     */
    union(set) {
        const unionSet = new Set(...this._store);

        set.values.forEach(item => unionSet.add(item));

        return unionSet;
    }

    /**
     * Возращает сет состоящий из элементов которые присутствуют в обоих сетах
     * @param {Set} set
     * @returns {Set}
     */
    intersection(set) {
      const intersectionSet = new Set();
      
      set.values.forEach(item => {
          if (this.has(item)) {
              intersectionSet.add(item);
          }
      });
      
      return intersectionSet;  
    }

    /**
     * Возращает сет состоящий из элементов присутствующих в первом сете, и отсутствующих во втором
     * @param {Set} set
     * @returns {Set}
     */
    difference(set) {
        const differenceSet = new Set();

        this.values.forEach(item => {
            if(!set.has(item)) {
                differenceSet.add(item);
            }
        });

        return differenceSet;
    }

    /**
     * Возвращает `true` если сет содержит в себе все элементы из друого сета
     * @param {Set} set
     * @returns {boolean}
     */
    isSubset(set) {
        if (this.size > set.size) {
            return false;
        }

        return this.values.every((item) => set.has(item))
    }
}

module.exports = Set;