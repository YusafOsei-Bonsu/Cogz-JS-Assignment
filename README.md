# JS Assignment

This assignment requires the creation and testing of different JS functions. Below are the following JS functions:

1. Write a JavaScript function to  get the number of occurrences of each letter in specified string. &#9745;
2. Write a JavaScript function that reverse a number. &#9745;
3. Write a JavaScript program to get the length of a JavaScript object. &#9745;
4. Write a JavaScript program to sort an array of JavaScript objects. &#9745;
5. Write a JavaScript function to retrieve all the names of object's own and inherited properties. &#9745;

## Tech Stack

- JavaScript
- Jasmine

## Project Setup

1. In terminal, I entered `npm i --save-dev jasmine` to locally install the Jasmine package.
2. Next, I entered `npx jasmine init` to configure the project for Jasmine.
3. Configure Jasmine as the testing framework (i.e. `"scripts": { "test": "jasmine" }`) in `package.json`.
4. Installed the `jasmine-spec-reporter` package by entering `npm install jasmine-spec-reporter --save-dev`, in order to increase readability of test results.
5. In the `spec\helpers` directory, I created the `reporter.js`, which contains the below JS code:
```javascript
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
        displayPending: true
    }
}));
```

For reviewing 