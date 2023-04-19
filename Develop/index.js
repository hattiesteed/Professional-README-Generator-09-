// TODO: Include packages needed for this application
const inquirer = require (`inquirer`);
const fs = require (`fs`);
// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        message: `What is the title of your project?`,
        name: `title`,
    },
    {
        type: `input`,
        message: `Please provide a description of your project`,
        name: `Description`,
    },
    {
        type: `input`,
        message: `Provide installation instructions`,
        name: `Installation`,
    },
    {
        type: `input`,
        message: `Provide usage instructions for your project`,
        name: `Usage`,
    },
    {
        type: `input`,
        message: `Provide testing instructions`,
        name: `Test`,
    },
    {
        type: `input`,
        message: `Provide contribution guidelines for your project`,
        name: `Contributions`,
    },
    {
        type: `list`,
        message: `Select license`,
        name: `License`,
        choices: [`MIT`, `Apache`, `GPL`, `none`],
    },

    {
        type: `input`,
        message: `Provide GitHub username`,
        name: `Username`,
    },
    {
        type: `input`,
        message: `Provide email address`,
        name: `email`,
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
