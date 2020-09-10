// Counts the amount of times a letter appears in the word
module.exports = countLetters = (word, letter) => {

    // Check if the fn arguments are alphabetical only
    if ((typeof(word) == "string") && (typeof(letter) == "string")) {
        
        // for case-insensitive string comparison 
        word = letter == letter.toLowerCase() ? word.toLowerCase() : word.toUpperCase();

        let sum = 0;
        word.split('').forEach(l => {
            if (l == letter) sum += 1;
        });
        
        return sum;
    } else {
        return "Enter alphabets only.";
    }
}