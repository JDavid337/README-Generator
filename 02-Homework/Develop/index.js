// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = ["What is the Title of Your README? ",
                    "Provide a brief description of your README: ", 
                    "Enter a Table of Contents: ", 
                    "How will your app be installed? ", 
                    "Why did you create this app? ", 
                    "Enter your liscence here: ", 
                    "List your contributors here: ", 
                    "How can we test your app? " ,
                    "Prompt the user for any further questions. "]

// TODO: Create a function to write README file
function writeToFile('README.md', READMEPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
) { }

// TODO: Create a function to initialize app

function init() { }

// Function call to initialize app
init();



const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${answers.github}</li>
        <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
    </div>
</div>
</body>
</html>`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where are you from?',
        },
        {
            type: 'input',
            name: 'hobby',
            message: 'What is your favorite hobby?',
        },
        {
            type: 'input',
            name: 'food',
            message: 'What is your favorite food?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn URL.',
        },
    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });
