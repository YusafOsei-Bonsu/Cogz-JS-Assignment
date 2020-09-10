// Returns an object's own and inherited properties
module.exports = getKeys = (obj) => (typeof(obj) != "object") ? [] : Object.keys(obj);