const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
// const Employee = require("./lib/Employee")

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Welcome team manager, please enter name:"
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
        type: "input",
        name: "officenumber",
        message: "Enter office telephone number:"
    },
    {
        type: "list",
        name: "addmember",
        choices: ['Add Engineer', 'Add Intern', 'My team is complete'],
    }
];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter name:"
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
        type: "input",
        name: "github",
        message: "Enter gitHub username:"
    },
    {
        type: "list",
        name: "addmember",
        choices: ['Add Engineer', 'Add Intern', 'My team is complete'],
    }
];

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter name:"
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
        type: "input",
        name: "school",
        message: "Enter college institution attended:"
    },
    {
        type: "list",
        name: "addmember",
        message: "Select from the following:",
        choices: ['Add Engineer', 'Add Intern', 'My team is complete'],
    }
];

function init() {
    inquirer.prompt(managerQuestions)
    .then(val => {
        // If the user says yes to another game, play again, otherwise quit the game
        if (val.addmember === 'Add Engineer') {
            inquirer.prompt(engineerQuestions);
        }
        if (val.addmember === 'Add Intern') {
            inquirer.prompt(internQuestions);
        } else {
          return 'done.';
        }
      });
    }

init();