// Reverses a number
module.exports = reverse = (number) => {
    // Checks for a non-numeric character in the number
    if (/\D/.test(number)) {
        return "Enter whole numbers only.";
    } else {
        return parseInt(number.toString().split('').reverse().join(''));
    }
}