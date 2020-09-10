const fileSystem = require('fs');
const countLetters = require('../scripts/count.js');
const reverse = require('../scripts/reverse.js');
const objectLength = require('../scripts/objectLength.js');
const objectSort = require('../scripts/objectSort.js');
const getKeys = require('../scripts/getKeys.js');

describe('JS Assignments', () => {
    
    // Test suite for the letter-counting JS function 
    describe('Letter-counting JS Fn', () => {
        // Check if the file exists
        it('File should exist', () => expect(fileSystem.statSync('./scripts/count.js')).toBeTruthy());
        
        // Sample test data
        it("Should return 2 since there's two Ts in 'test'", () => expect(countLetters("test", 't')).toBe(2))

        // Check how many times 'a' occurs in the word "radar"
        it("Should return 2 when counting a's in 'radar'", () => expect(countLetters("radar", "a")).toBe(2));

        // Check how many times 'C' occurs in the word "Codecademy"
        it("Should return 2 when counting the capital 'C' in 'Codecademy'", () => expect(countLetters("Codecademy", "C")).toBe(2));

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
    
    // Test suite for reverse-number JS function
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

    // Test suite for object-length JS function
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

    // Test suite for JS function that sorts list of objects 
    describe('Object-sort JS Fn', () => {
        // Sample test data
        let testData = [
            { title: "The Road Ahead", author: "Bill Gates", libraryID: 1245 },
            { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
            { title: "Mockingjay: The Final Book of The Hunger", author: "Suzanne Collins", libraryID: 3245 }
        ];

        // Check if the file exists
        it('File should exist', () => expect(fileSystem.statSync('./scripts/objectSort.js')).toBeTruthy());

        // Checking if the function sorts a list of objects by their properties
        it("Should return a version of the list that's sorted by 'title'", () => {
            expect(objectSort(testData, "title")).toEqual([
                Object({ title: 'Mockingjay: The Final Book of The Hunger', author: 'Suzanne Collins', libraryID: 3245 }),
                Object({ title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1245 }), 
                Object({ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 })
            ]);
        });
        
        it("Should return a version of the list that's sorted by 'author'", () => {
            expect(objectSort(testData, "author")).toEqual([
                Object({ title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1245 }), 
                Object({ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }), 
                Object({ title: 'Mockingjay: The Final Book of The Hunger', author: 'Suzanne Collins', libraryID: 3245 })
            ]);
        });

        it("Should return a version of the list that's sorted by 'libraryID'", () => {
            expect(objectSort(testData, "libraryID")).toEqual([
                Object({ title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1245 }), 
                Object({ title: 'Mockingjay: The Final Book of The Hunger', author: 'Suzanne Collins', libraryID: 3245 }),
                Object({ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 })
            ]);
        }); 
    });

    // Test suite for JS function to retrieve an object's own and inherited properties
    describe("Retrieve object's 'own-&-inherited-props' JS Fn", () => {
        // Check if the file exists
        it('File should exist', () => expect(fileSystem.statSync('./scripts/getKeys.js')).toBeTruthy());

        // Checks if the child object's own and inherited keys get retrieved
        it("Retrieves the Car instance's own and inherited keys", () => {
            const Vehicle = function(numOfWheels, numOfSeats, color) {
                this.numOfWheels = numOfWheels;
                this.numOfSeats = numOfSeats;
                this.color = color;
            }

            const Car = function(numOfWheels, numOfSeats, color, brand, model, weightKg) {
                Vehicle.call(this, numOfWheels, numOfSeats, color);
                this.brand = brand;
                this.model = model;
                this.weightKg = weightKg;
            }

            let fiat = new Car(4, 5, 'white', 'Fiat', 500, 850);
            expect(getKeys(fiat)).toEqual([ 'numOfWheels', 'numOfSeats', 'color', 'brand', 'model', 'weightKg' ]);
        });

        // Error handling
        it("Returns [] in response to a non-object input", () => {
            expect(getKeys(2)).toEqual([]);
            expect(getKeys("hello world")).toEqual([]);
            expect(getKeys(true)).toEqual([]);
            expect(getKeys({})).toEqual([]);
        })

    });
})