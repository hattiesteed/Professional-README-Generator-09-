// TODO: Include packages needed for this application
const inquirer = require (`inquirer`);
const fs = require (`fs`);
const generateMarkdown = require (`./utils/generateMarkdown`);
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
        name: `description`,
    },
    {
        type: `input`,
        message: `Provide installation instructions`,
        name: `installation`,
    },
    {
        type: `input`,
        message: `Provide usage instructions for your project`,
        name: `usage`,
    },
    {
        type: `input`,
        message: `Provide testing instructions`,
        name: `tests`,
    },
    {
        type: `input`,
        message: `Provide contribution guidelines for your project`,
        name: `contributions`,
    },
    {
        type: `list`,
        message: `Select license`,
        name: `license`,
        choices: [`MIT`, `Apache`, `GPL`, `none`],
    },

    {
        type: `input`,
        message: `Provide questions`,
        name: `questions`,
    },

    {
        type: `input`,
        message: `Provide GitHub username`,
        name: `username`,
    },
    {
        type: `input`,
        message: `Provide email address`,
        name: `email`,
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), 
    function (err) {
        if (err) {
            return console.log(err); }
        console.log(`Your README file has been generated!`);
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (data) {
        writeToFile(`README.md`, data);
    })
};

// Function call to initialize app
init();
