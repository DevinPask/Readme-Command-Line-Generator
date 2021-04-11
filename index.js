const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./Develop/utils/getMarkdown');

//array of questions to prompt user
const questions = [
  {
    type: 'input',
    messasge: "What is your name?",
    name: 'username',
    validate: (value) => { if (value) { return true } else { return 'Please enter a title' } },
  },
  {
    type: 'input',
    messasge: "What's the project title?",
    name: 'title',
    validate: (value) => { if (value) { return true } else { return 'Please enter a title' } },
  },
  {
    type: 'input',
    messasge: "What does the project do?",
    name: 'description',
    validate: (value) => { if (value) { return true } else { return 'Please enter a title' } },
  },
  {
    type: 'input',
    messasge: "How do you install your app?",
    name: 'installation',
    validate: (value) => { if (value) { return true } else { return 'Please enter a description' } },
  },
  {
    type: 'input',
    messasge: "Instructions to follow?",
    name: 'instructions',
    validate: (value) => { if (value) { return true } else { return 'Please enter instructions' } },
  },
  {
    type: 'input',
    messasge: "Parameters for contributions?",
    name: 'contribution',
    validate: (value) => { if (value) { return true } else { return ' ' } },
  },
  {
    type: 'input',
    messasge: "Testing?",
    name: 'testing',
    validate: (value) => { if (value) { return true } else { return ' ' } },
  },
  {
    type: 'input',
    messasge: "How do you use your app?",
    name: 'usage',
    validate: (value) => { if (value) { return true } else { return 'Please enter a use' } },
  },
  {
    type: 'list',
    messasge: "What license did you use?",
    name: 'license',
    choices: ['MIT', 'GPL', 'Apache', 'GNU', 'None'],
    default: 'MIT',
    validate: (value) => { if (value) { return true } else { return 'Please enter a license' } },
  },
  {
    type: 'input',
    messasge: "Github username:",
    name: 'git',
    validate: (value) => { if (value) { return true } else { return 'Please enter a username' } },
  },
  {
    type: 'input',
    messasge: "E-mail:",
    name: 'email',
    validate: (value) => { if (value) { return true } else { return 'Please enter a E-mail' } },
  }
];



//function to init app
function init() {
  inquirer
    .prompt(questions)
    .then(appData => {
      console.log(appData);
      generateMarkdown(appData);
    });
};

//function to pass data to getMarkdown so that README file can be written to
function generateMarkdown(appData) {

  fs.writeFile("./dist/README.md", template.getMarkdown(appData), err => {
    if (err) {
      return console.log(err);
    } else {
      console.log('File created!');
    }
  });

};

// Function call to initialize app
init();