const Input = require('../input/');

class Checkbox extends Input {
    /**
     * @param {{ tag: string, id: string, className: string, type: string, name: string, disabled: boolean, required: boolean, checked: boolean }} args 
     */
    constructor({ checked = false, ...args }) {
        super({ type: 'checkbox', value: checked, ...args }); 
    }

    /**
     * `get` - Возвращает значение элемента.
     * 
     * `set` - Устанавливает значение элемента и сообщает слушателям о событии `change`.
     * 
     * @returns {boolean}
     */
    get checked() { 
        return this.value;
     }
    set checked(value) { 
        super.value = value;
     }

    /**
     * Проверяет валидность значения
     * @returns {boolean}
     */
    get isValid() {
        if (typeof this.value !== 'boolean') {
            return false;
        }

        return super.isValid; 
    }
}

module.exports = Checkbox;