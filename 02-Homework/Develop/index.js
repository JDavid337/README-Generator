// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of Your README?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your README:'
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Enter a Table of Contents:' 
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How will your app be installed?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Why did you create this app?'
    },
    {
        type: 'input',
        name: 'liscence',
        message: 'Enter your liscence here:',
        choices: ['The GPL License', 'The MIT License', 'Apache License', 'GNU License', 'Not Applicable']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List your contributors here:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can we test your app?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Prompt the user for any further questions.'
    },    
    {
        type: 'input',
        name: 'GitHub',
        message: 'Creators Github.'
    },    
    {
        type: 'input',
        name: 'linkedin',
        message: 'Creators linked profile.'
    },    
    {
        type: 'input',
        name: 'email',
        message: 'Creators e-mail.'
    },
])
.then((answers) => {
const READMEcontent = generateREADME(answers);

// TODO: Create a function to write README file

fs.writeFile('README.md', READMEcontent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
);
});

// TODO: Create a function to initialize app

// function init() { }

// Function call to initialize app
// init();

