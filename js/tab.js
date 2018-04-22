const ACTIVE_CLASS = 'active';
export default class Tab {
    /**
     * Создает вкладку.
     * @param {{ element: HTMLElement, onActivate: Function }} args
     */
    constructor({element, onActivate}) {
        this._tab = element;
        this._onActivate = onActivate;

        this.init();
    }

    /**
     * Инициализирует объект.
     * Устанавливает свойство акивности вкладки.
     * Устанавливает обработчик для обработки нажатия на элемент.
     * @private
     */
    init() {
        this.isActive = this.element.classList.contains(ACTIVE_CLASS);
        this.element.addEventListener('click', event => this.handleClick(event));
    }

    /**
     * Возвращает HTML элемент.
     * @returns {HTMLElement}
     */
    get element() { 
        return this._tab;
     }

    /**
     * Возвращает ID вкладки.
     * ID вкладки берется из атрибута `hash` у элемента (`#panel-1` => `panel-1`)
     * @returns {string}
     */
    get id() { 
        return this._tab.hash.substring(1);
     }

    /**
     * `get` - Возвращает `true` или `false` в зависимости от того активна вкладка или нет.
     * 
     * `set` - Устанавливает активность вкладки, добавляя или удаляя соответствующий класс
     * @returns {boolean}
     */
    get isActive() {  
        return this._active;
    }

    set isActive(active) {
        this._active = active;

        this.element.classList.toggle(ACTIVE_CLASS, this._active);
    }

    set onActivate(onActivate) {
        this._onActivate = onActivate;
    }

    /**
     * Вызывается при нажатии на вкладку.
     * 
     * Устанавливает активность вкладки.
     * Вызывает функцию обратно вызова, отправляя туда ссылку на текущий объект, т.е. саму вкладку.
     * @private
     * @param {Event} event 
     */
    handleClick(event) {
        this.isActive = true;

        this._onActivate(this);
    }
}