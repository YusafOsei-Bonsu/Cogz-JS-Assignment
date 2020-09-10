const fileSystem = require('fs');
const countLetters = require('../count.js');

describe('JS Assignments', () => {
    
    // Test suite for the letter-counting JS fn 
    describe('Letter-counting JS Function', () => {
        // Check if the file exists
        it('File should exist', () => expect(fileSystem.statSync('count.js')).toBeTruthy());
        
        // Check how many times 'a' occurs in the word "radar"
        it("Should return 2 when counting a's in 'radar'", () => expect(countLetters("radar", "a")).toBe(2));

        // Check how many times 'C' occurs in the word "Codecademy"
        it("Should return 1 when counting the capital 'C' in 'Codecademy'", () => expect(countLetters("Codecademy", "C")).toBe(2));

        // Checks if an error message returns if both of the arguments are numbers
        it("Should return an error message if both arguments are numbers", () => expect(countLetters(1, 2)).toBe("Enter strings only."));

        // Checks if an error message returns if one of the arguments is a number
        it("Should return an error message if one of the arguments is a number", () => expect(countLetters(1, '2')).toBe("Enter strings only."));

        // Checks if an error message returns if both arguments are non-alphabetical strings
        it("Should return an error message if both of the arguments are non-alphabetical Strings", () => expect(countLetters('1', '2')).toBe("Enter alphabets only."));
    });
})