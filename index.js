const fs = require("fs");
// const path = require("path");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const htmlMaker = require("./htmlmaker")

// const Employee = require("./lib/Employee")
const workForce = []

const empQuestions = [
    {
        type: "input",
        name: "name",
        message: "Welcome team member, please enter name:",
        validate: (answer) => {
            if (answer !== "") {
                return true;
            }
            return "Enter a valid name";
        }
    },
    {
        type: "input",
        name: "id",
        message: "Enter ID number:",
        validate: (answer) => {
            if (answer !== "") {
                return true;
            }
            return "Enter a valid name";
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter e-mail address:",
        validate: (answer) => {
            const pass = answer.match(/^\S+@\S+\.\S+/)
            if (pass) {
                return true;
            }
            return "Enter valid e-mail address";
        }
    },
    {
        type: "list",
        name: "role",
        message: "Select company role:",
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter office number:',
        when: function(answers) {
            return answers.role === 'Manager';
        }
        
    },
    {
        type: "input",
        name: "gitHub",
        message: "Enter gitHub username:",
        when: function(answers) {
            return answers.role === 'Engineer';
        }
    },
    {
        type: "input",
        name: "school",
        message: "Enter college institution attended:",
        when: function(answers) {
            return answers.role === 'Intern';
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
        console.log(workForce)
        if (answers.addemployee === 'Yes') {
            init();
        } else {
            // fs code to write html
            fs.writeFile('./dist/workforce.html', htmlMaker(workForce), (err) =>
            err ? console.log(err) : console.log('Work Force html has been created.')
            )};
    });
}

function createWorker(answers) {
    let newWorker;
    if (answers.role === 'Manager') {
        newWorker = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    } else if (answers.role === 'Engineer') {
        newWorker = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
    } else if (answers.role === 'Intern') {
        newWorker = new Intern(answers.name, answers.id, answers.email, answers.school);
    } return newWorker;
}

init();