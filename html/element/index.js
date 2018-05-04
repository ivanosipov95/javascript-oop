const EventEmitter = require('../event-emitter');

const BY_SPACE = ' ';
class Element extends EventEmitter {
    /**
     * @param {{ tag: string, id: string, className: string }} args
     */
    constructor({ tag, id, className = '' }) {
        super();
        
        this.tag = tag;
        this.id = id;
        this.classes = [];
        
        this._init(className);
    }

    /**
     * Возвращает строку с названиями CSS классов.
     * 
     * @returns {string}
     */
    get className() {
        return this.classes.join(BY_SPACE);
    }

    /**
     * Добавляет CSS класс.
     * 
     * @param {string} className 
     */

     /*
      @codedojo

      Давно задаюсь вопросом - насколько хорошо переиспользовать публичный апи - в данном случае hasClass? 
      Довольно часто мы предоставляем вспомогательные методы клиенту, которые также могли бы переиспользовать при создании нового апи.

      Вроде бы в этом нет ничего плохого, так как, если я уж его открыл, то уверен в том, что смысл данного метода не поменяется
      и он всегда будет следовать контракту.

      Есть чем поделиться на основе твоего опыта?
      */
    addClass(className) {
        if(!this.hasClass(className)) {
           this.classes.push(className); 
        }
    }

    /**
     * Удаляет CSS класс.
     * 
     * @param {string} className 
     */
    removeClass(className) {
        if (!this.hasClass(className)) {
            return;
        }

        this.classes = this.classes.filter(item => item !== className);
    }

    /**
     * Возращает `true` или `false` в зависимости от начилия CSS класса.
     * 
     * @param {string} className
     * @returns {boolean}
     */
    hasClass(className) {
        return this.classes.includes(className);
    }

    /**
     * Добавляет или удаляет CSS класс в зависимости от его наличия.
     * 
     * @param {string} className 
     */
    toggleClass(className) {
        if (this.hasClass(className)) {
            this.removeClass(className);
        } else {
            this.addClass(className);
        }
    }

    _init(className) {
        if (!className) {
             return;   
        }

        this.classes = className.split(BY_SPACE);
    }
}

module.exports = Element;