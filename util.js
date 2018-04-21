const checkEmpty = (isEmpty, errorMessage) => {
    if (isEmpty) {
        throw new Error(errorMessage);
    }
};

/**
* Возвращает индекс найденого элемента
* @param {Array} items 
* @param {} searchItem 
*/
const indexOf = (items, searchItem) => {
    if (searchItem instanceof Object) {
        for (let i = 0; i < items.length; i++) {
            let isEqual;

            if (items[i] instanceof Object) {
                const itemKeys = Object.keys(items[i]);
                isEqual = itemKeys.every(key => {
                    if (searchItem.hasOwnProperty(key)) {
                        return items[i][key] === searchItem[key];
                    }
                })
            }

            if (isEqual) {
                return i;
            }
        }
    }

    return items.indexOf(searchItem);
};

const IS_EMPTY = 'is empty';

const EMPTY_MESSAGES = {
    stack: `Stack ${IS_EMPTY}`,
    queue: `Queue ${IS_EMPTY}`,
    set: `Set ${IS_EMPTY}`,
};

module.exports = {
    checkEmpty,
    indexOf,
    EMPTY_MESSAGES
};
