const checkEmpty = (isEmpty, errorMessage) => {
    if (isEmpty) {
        throw new Error(errorMessage);
    }
}

const IS_EMPTY = 'is empty';

const EMPTY_MESSAGES = {
    stack: `Stack ${IS_EMPTY}`,
    queue: `Queue ${IS_EMPTY}`,
    set: `Set ${IS_EMPTY}`,
}

module.exports = {
    checkEmpty,
    EMPTY_MESSAGES
};
