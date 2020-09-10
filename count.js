// Counts the amount of times a letter appears in the word
module.exports = countLetters = (word, letter) => {
    let sum = 0;
    word.split('').forEach(l => {
        if (l == letter) {
            sum += 1;
        }
    });
    return sum;
}