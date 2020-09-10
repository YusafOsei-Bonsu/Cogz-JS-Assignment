// Counts the amount of times a letter appears in the word
module.exports = countLetters = (word, letter) => {
    // Check if the fn arguments are strings and alphabets
    if ((typeof(word) == "string") && (typeof(letter) == "string")) {
        if (/^[a-zA-Z]+$/.test(word) && /^[a-zA-Z]+$/.test(letter)) {
            // for case-insensitive string comparison 
            word = letter == letter.toLowerCase() ? word.toLowerCase() : word.toUpperCase();
            let sum = 0;
            word.split('').forEach(l => {
                if (l == letter) sum += 1;
            });
            // Frequency of the letter inside the word
            return sum;
        } else {
            return "Enter alphabets only."
        }
    } else {
        return "Enter strings only.";
    }
}