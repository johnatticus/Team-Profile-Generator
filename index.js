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
        type: "list",
        name: "addemployee",
        message: "Input another worker?",
        choices: ['Yes', 'No'],
    }
];

function init() {
    console.log("Hello valued employee. Time to assemble our workforce. Let us begin.")
    inquirer.prompt(empQuestions)
    .then((answers) => {
        const newWorker = createWorker(answers);
        workForce.push(newWorker);
        if (answers.addemployee === 'Yes') {
            inquirer.prompt(empQuestions)
        } else {
            // fs code to write html
        }
    });
}

function createWorker(answers) {
    let newWorker;
    if (answers.role === 'Manager') {
        newWorker = new Manager(answers.name, answers.id, answers.email, answers.officenumber);
    } else if (answers.role === 'Engineer') {
        newWorker = new Engineer(answers.name, answers.id, answers.email, answers.github);
    } else if (answers.role === 'Intern') {
        newWorker = new Intern(answers.name, answers.id, answers.email, answers.school);
    } return newWorker;
}

init();