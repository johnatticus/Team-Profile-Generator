// requirements
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const htmlMaker = require("./htmlmaker")

// empty array that we will push our team members to that are generated through prompts
const workForce = []

// array of questions for the manager
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Manager, enter name:",
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

// array of questions for non-manager employees
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
        message: "Enter worker' github username:",
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

// initial function that is ran when the app is started
// launches the manager questions first
// than takes answers, creates a new worker out of them and pushes to the empty array
// determines by user choice is new workers should be added or to finish and write the HTML file
function init() {
    console.log(" _    _            _     __                    ______      _        _                   \r\n| |  | |          | |   \/ _|                   |  _  \\    | |      | |                   \r\n| |  | | ___  _ __| | _| |_ ___  _ __ ___ ___  | | | |__ _| |_ __ _| |__   __ _ ___  ___ \r\n| |\/\\| |\/ _ \\| \'__| |\/ \/  _\/ _ \\| \'__\/ __\/ _ \\ | | | \/ _` | __\/ _` | \'_ \\ \/ _` \/ __|\/ _ \\\r\n\\  \/\\  \/ (_) | |  |   <| || (_) | | | (_|  __\/ | |\/ \/ (_| | || (_| | |_) | (_| \\__ \\  __\/\r\n \\\/  \\\/ \\___\/|_|  |_|\\_\\_| \\___\/|_|  \\___\\___| |___\/ \\__,_|\\__\\__,_|_.__\/ \\__,_|___\/\\___|\r\n                                                                                         \r\n                                                                                         ")
    console.log("Welcome, valued management employee. It is time to enter workers into our workforce database. Let us begin by inputing your personal information.")
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

// function that runs if user wants to add more workers beyond the manager
// operates the same or similar to the init function
function initWorkers() {
    console.log("Worker input system initialized. Let us continue.")
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
            err ? console.log(err) : console.log('All worker inputs completed. Please view the Workforce Database HTML file at your earliest convenience. Thank you for your cooperation, Manager.')
            )};
    });
}

// function that runs when the manager is created
// takes the answers data to create a new class
// works in conjunction with the init function
function createManager(answers) {
    let newWorker;
    if (answers.officeNumber !== '') {
        newWorker = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    } return newWorker;
}

// function that runs when a non-manager employee is created
// takes the answers data to create a new class
// works in conjunction with the initWorkers function
function createWorker(answers) {
    let newWorker;
    if (answers.role === 'Engineer') {
        newWorker = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
    } else if (answers.role === 'Intern') {
        newWorker = new Intern(answers.name, answers.id, answers.email, answers.school);
    } return newWorker;
}

// tells file to run init function when started
init();