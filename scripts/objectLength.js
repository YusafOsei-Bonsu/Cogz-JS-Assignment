module.exports = objectLength = (obj) => {
    let size = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) size += 1;
    }
    return size;
}