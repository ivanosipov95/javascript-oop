const Input = require('../input');

class TextInput extends Input {
    /**
     * @param {{ tag: string, id: string, className: string, type: string, name: string, disabled: boolean, required: boolean, value: string, minlength: string, maxlength: string }} args 
     */
    constructor({ value = '', minlength, maxlength, ...args }) {
        super({value, ...args});

        this.minlength = minlength;
        this.maxlength = maxlength;
    }

    /**
     * Проверяет валидность значения.
     * 
     * Значение должно быть больше или равно `minlength` и меньше или равно `maxlength`.
     * 
     * @returns {boolean}
     */
    get isValid() {
        const length = this.value.length;

        return length >= this.minlength && length <= this.maxlength;
    }
}

module.exports = TextInput;