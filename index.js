const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee")

const managerQuestions = [
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
        choices: ['Add Engineer', 'Add Intern', 'My team is complete'],
    }
];

