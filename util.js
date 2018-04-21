const checkEmpty = (isEmpty, errorMessage) => {
    if (isEmpty) {
        throw new Error(errorMessage);
    }
};

const indexOf = (items, searchItem) => {
    if (searchItem instanceof Object) {

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
