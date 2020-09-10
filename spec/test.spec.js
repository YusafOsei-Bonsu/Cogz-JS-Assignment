const fileSystem = require('fs');
const countLetters = require('../count.js');

describe('JS Assignments', () => {
    
    // Test suite for the letter-counting JS fn 
    describe('Count letters JS function', () => {
        // Check if the file exists
        it('File should exist', () => expect(fileSystem.statSync('count.js')).toBeTruthy());
        
        // Check how many times 'a' occurs in the word "radar"
        it("Should return 2 when counting a's in 'radar'", () => expect(countLetters("radar", "a")).toBe(2));

        // Check how many times 'C' occurs in the word "Codecademy"
        it("Should return 1 when counting the capital 'C' in 'Codecademy'", () => expect(countLetters("Codecademy", "C")).toBe(2));

        // Returns an error message if non-alphabetical arguments are entered
        it("Should return an error message if any of the arguments are not ", () => expect(countLetters(1, 2)).toBe("Enter alphabets only."));

    });
})