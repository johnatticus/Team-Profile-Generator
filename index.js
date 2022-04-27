const fs = require("fs");
// const path = require("path");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const htmlMaker = require("./htmlmaker")

// const Employee = require("./lib/Employee")
const workForce = []

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Welcome team manager, please enter name:",
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
        type: 'input',
        name: 'officeNumber',
        message: 'Enter office number:',
        validate: (answer) => {
            if (answer !== "") {
                return true;
            }
            return "Enter a valid office number";
        }
    },
    {
        type: "list",
        name: "addemployee",
        message: "Input another worker?",
        choices: ['Yes', 'No'],
    }
];

const empQuestions = [
    {
        type: "list",
        name: "role",
        message: "Select the company role of this worker:",
        choices: ['Engineer', 'Intern'],
    },
    {
        type: "input",
        name: "name",
        message: "Enter worker's name:",
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
        message: "Enter worker's ID number:",
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
        message: "Enter worker's e-mail address:",
        validate: (answer) => {
            const pass = answer.match(/^\S+@\S+\.\S+/)
            if (pass) {
                return true;
            }
            return "Enter valid e-mail address";
        }
    },
    {
        type: "input",
        name: "gitHub",
        message: "Enter worker's GitHub username:",
        when: function(answers) {
            return answers.role === 'Engineer';
        },
        validate: (answer) => {
            if (answer !== "") {
                return true;
            }
            return "Enter a valid GitHub username";
        }
    },
    {
        type: "input",
        name: "school",
        message: "Enter worker's higher education institution:",
        when: function(answers) {
            return answers.role === 'Intern';
        },
        validate: (answer) => {
            if (answer !== "") {
                return true;
            }
            return "Enter a valid institution";
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
    console.log("Welcome, valued management employee. It is time to enter our workers into our workforce database. Let us begin entering your personal information")
    inquirer.prompt(managerQuestions)
    .then((answers) => {
        const newWorker = createManager(answers);
        workForce.push(newWorker);
        // console.log(workForce)
        if (answers.addemployee === 'Yes') {
            initWorkers();
        } else {
            // fs code to write html
            fs.writeFile('./dist/workforce.html', htmlMaker(workForce), (err) =>
            err ? console.log(err) : console.log('Work Force html has been created.')
            )};
    });
}

function initWorkers() {
    console.log("Another worker to be entered. Excellent. Let us continue.")
    inquirer.prompt(empQuestions)
    .then((answers) => {
        const newWorker = createWorker(answers);
        workForce.push(newWorker);
        // console.log(workForce)
        if (answers.addemployee === 'Yes') {
            initWorkers();
        } else {
            // fs code to write html
            fs.writeFile('./dist/workforce.html', htmlMaker(workForce), (err) =>
            err ? console.log(err) : console.log('Work Force html has been created.')
            )};
    });
}

function createManager(answers) {
    let newWorker;
    if (answers.officeNumber !== '') {
        newWorker = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    } return newWorker;
}

function createWorker(answers) {
    let newWorker;
    if (answers.role === 'Engineer') {
        newWorker = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
    } else if (answers.role === 'Intern') {
        newWorker = new Intern(answers.name, answers.id, answers.email, answers.school);
    } return newWorker;
}

init();