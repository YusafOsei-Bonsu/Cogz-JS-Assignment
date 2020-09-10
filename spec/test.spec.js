const fileSystem = require('fs');
const countLetters = require('../scripts/count.js');
const reverse = require('../scripts/reverse.js');
const objectLength = require('../scripts/objectLength.js');


describe('JS Assignments', () => {
    
    // Test suite for the letter-counting JS fn 
    describe('Letter-counting JS Fn', () => {
        // Check if the file exists
        it('File should exist', () => expect(fileSystem.statSync('./scripts/count.js')).toBeTruthy());
        
        // Sample test data
        it("Should return 2 since there's two Ts in 'test'", () => expect(countLetters("test", 't')).toBe(2))

        // Check how many times 'a' occurs in the word "radar"
        it("Should return 2 when counting a's in 'radar'", () => expect(countLetters("radar", "a")).toBe(2));

        // Check how many times 'C' occurs in the word "Codecademy"
        it("Should return 1 when counting the capital 'C' in 'Codecademy'", () => expect(countLetters("Codecademy", "C")).toBe(2));

        // Checks if an error message returns if both of the arguments are numbers
        it("Should return an error message if both arguments are numbers", () => expect(countLetters(1, 2)).toBe("Enter strings only."));

        // Checks if an error message returns if one of the arguments is a number
        it("Should return an error message if one of the arguments is a number", () => expect(countLetters(1, '2')).toBe("Enter strings only."));

        // Checks if an error message returns if both of the arguments are boolean values
        it("Should return an error message if both arguments are boolean", () => expect(countLetters(true, false)).toBe("Enter strings only."));

        // Checks if an error message returns if one of the arguments is a boolean
        it("Should return an error message if one of the arguments is a boolean", () => expect(countLetters(true, 'false')).toBe("Enter strings only."));

        // Checks if an error message returns if both of the arguments are decimal/float
        it("Should return an error message if both arguments are decimal/float", () => expect(countLetters(1.1, 1.2)).toBe("Enter strings only."));

        // Checks if an error message returns if one of the arguments is a decimal/float
        it("Should return an error message if one of the arguments is a decimal/float", () => expect(countLetters(1.1, '1.2')).toBe("Enter strings only."));

        // Checks if an error message returns if both arguments are non-alphabetical strings
        it("Should return an error message if both of the arguments are non-alphabetical Strings", () => expect(countLetters('1', '2')).toBe("Enter alphabets only."));
    });
    
    // Test suite for reverse-number JS fn
    describe('Reverse-number JS Fn', () => {
        // Check if the file exists
        it('File should exist', () => expect(fileSystem.statSync('./scripts/reverse.js')).toBeTruthy());
        
        // Sample test data
        it('Should return 34223', () => expect(reverse(32243)).toBe(34223))

        // Different lengths of numbers 
        it('Should return 1', () => expect(reverse(1)).toBe(1));    
        it('Should return 005', () => expect(reverse(500)).toBe(005));
        it('Should return 0000000001', () => expect(reverse(1000000000)).toBe(0000000001));

        // Checks if the fn returns an error message in response to recieving non-integer input 
        it('Should return an error message in response to alphabetical arguments', () => expect(reverse("hello world")).toBe("Enter whole numbers only."));
        it('Should return an error message in response to a decimal argument', () => expect(reverse(1.5)).toBe("Enter whole numbers only."));
    });

    // Test suite for object-length JS fn
    describe('Object-length JS Fn', () => {
         // Check if the file exists
         it('File should exist', () => expect(fileSystem.statSync('./scripts/objectLength.js')).toBeTruthy());

         it("Should return 1 since there's one property", () => expect(objectLength({ name: "Yusaf Osei-Bonsu" })).toBe(1));
         
         // Sample test data
         it("Should return 3 since there's three property", () => expect(objectLength({
            name : "test",
            class : "VI",
            rollno : 12 
         })).toBe(3));

         it("Should return 4 since there's four properties", () => expect(objectLength({ 
             name: 'Fiat',
             model: 500,
             weight: '850kg',
             color: 'white'
          })).toBe(4));
    });
})