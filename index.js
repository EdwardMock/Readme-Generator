// Require Inquirer and File System Packages
const inquirer = require('inquirer');
const fs = require('file-system');

// Use Inquirer to prompt the user for the information about their project
function projectInformation() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Please provide a description of your project.'
        },
        {
            type: 'input',
            name: 'projectLicense',
            message: 'What kind of license should your project have?'
        },
        {
            type: 'input',
            name: 'projectContributors',
            message: 'Who are the contributors to your project?'
        },
        {
            type: 'input',
            name: 'projectUsage',
            message: 'What is the usage of your project?'
        },
        {
            type: 'input',
            name: 'projectInstallation',
            message: 'What are the installation instructions for your project?'
        },
        {
            type: 'input',
            name: 'projectTest',
            message: 'What are the test instructions for your project?'
        }
    ]).then(function(answers){JSON.stringify(answers)
//Use the project name to create a folder for the project
        fs.mkdir(answers.projectName, function(err){
// Create a new file called README.md in the newly created folder and write the answers to the new file using markdown.
    fs.writeFile(`${answers.projectName}/README.md`, `
    # ${answers.projectName}

    ## Description

    ${answers.projectDescription}

    ## Installation

    ${answers.projectInstallation}

    ## Usage

    ${answers.projectUsage}

    ## Credits

    ${answers.projectContributors}

    ## License

    ${answers.projectLicense}


    ## Features

    If your project has a lot of features, list them here.

    ## Tests

    ${answers.projectTest}
    `,
    function(err){
        if (err) throw err;
        console.log('README.md created!');
    });
    });
    });
}

return projectInformation();