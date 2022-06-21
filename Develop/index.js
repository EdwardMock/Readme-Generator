// TODO: Include packages needed for this application
import inquirer from 'inquirer'; //Import inquirer package
import fs from 'file-system'; //Import file-system package
import generateMarkdown from './utils/generateMarkdown.js'; //Import generateMarkdown function

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: function (value) { return value.length > 0 ? true : "Please enter a title"; }
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project.",
        validate: function (value) { return value.length > 0 ? true : "Please enter a short description"; }
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter instructions on how to install your project.",
        validate: function (value) { return value.length > 0 ? true : "Please enter instructions on how to install your project"; }
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter instructions on how to use your project.",
        validate: function (value) { return value.length > 0 ? true : "Please enter instructions on how to use your project"; }
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter instructions on how to run tests for your project.",
        validate: function (value) { return value.length > 0 ? true : "Please enter instructions on how to run tests for your project"; }
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter instructions on how to contribute to your project.",
        validate: function (value) { return value.length > 0 ? true : "Please enter instructions on how to contribute to your project"; }
    },
    {
        type: "input",
        name: "questions",
        message: "Please enter instructions on how to contact you for any questions.",
        validate: function (value) { return value.length > 0 ? true : "Please enter instructions on how to contact you for any questions"; }
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla Public License 2.0",
            "Apache License 2.0",
            "MIT License",
            "Boost Software License 1.0",
            "The Unlicense",
            "None"
        ],
    }
];


// TODO: Create a function to write README file
//Use file system to create a folder called output in the current directory and then create a folder called ${title} in the output folder
function setupFolder() {
    fs.mkdirSync('./output');
    fs.mkdirSync('./output/' + title);
}

//Use file system to create a markdown file called README.md in the newly created folder called ${title} in the output folder
function writeFile(data) {
    fs.writeFileSync('./output/' + title + '/README.md', data);
}


// TODO: Create a function to initialize app
//Use inquirer to prompt the user for all of the questions in the questions array and then use the generateMarkdown function to generate the README.md file then use setupFolder and writeFile to write the file to the correct folder.
function init() {
    inquirer.prompt(questions).then(function (data) {
        const readme = generateMarkdown(data);
        setupFolder();
        writeFile(readme);
    }
    );
}

init()