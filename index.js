const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
// const Employee = require("./lib/Employee")

const empQuestions = [
    {
        type: "input",
        name: "name",
        message: "Welcome team member, please enter name:"
    },
    {
        type: "input",
        name: "id",
        message: "Enter ID number:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter e-mail address:"
    },
    {
        type: "list",
        name: "role",
        message: "Select company role:",
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'officenumber',
        message: 'Enter office number:',
        when: function(answers) {
            return answers.jobtype === 'Manager';
        }
    },
    {
        type: "input",
        name: "github",
        message: "Enter gitHub username:",
        when: function(answers) {
            return answers.jobtype === 'Engineer';
        }
    },
    {
        type: "input",
        name: "school",
        message: "Enter college institution attended:",
        when: function(answers) {
            return answers.jobtype === 'Intern';
        }
    },
    {
        type: "confirm",
        name: "addemployee",
        message: "Input another worker?",
    }
];

function init() {
    console.log("Hello valued employee. Welcome to the team builder thing. Let's begin...")
    inquirer.prompt(empQuestions)
    .then((answers) => {
        const newWorker = createWorker(answers);
        team.push(newWorker);
        if (answers.addemployee === true) {
            inquirer.prompt(empQuestions)
        }
    });
}

function createWorker(answers) {

}

init();