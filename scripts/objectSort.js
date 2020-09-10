module.exports = objectSort = (objList, prop) => {
    objList.sort((item, nextItem) => {
        if (item[prop] > nextItem[prop]) {
            return 1; // Current item should go before the next item
        } else {
            return -1; // Next item should precede the current item
        }
    });
    return objList;
}