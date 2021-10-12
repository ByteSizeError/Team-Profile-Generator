const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const team = [];

const menuQuestion = [
    {
        type: "list",
        message: "Add Team Member?",
        name: "add",
        choices: ["Engineer", "Intern", "Finish Building Team"]
    }
];

const managerQuestions = [
    {
        type: "input",
        message: "Team Manager's Name:",
        name: "name"
    },
    {
        type: "number",
        message: "Employee ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Email:",
        name: "email"
    },
    {
        type: "number",
        message: "Office Number:",
        name: "office"
    }
];

const engineerQuestions = [
    {
        type: "input",
        message: "Engineer's Name:",
        name: "name"
    },
    {
        type: "number",
        message: "Employee ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Email:",
        name: "email"
    },
    {
        type: "input",
        message: "GitHub Username:",
        name: "github"
    }
];

const internQuestions = [
    {
        type: "input",
        message: "Intern's Name:",
        name: "name"
    },
    {
        type: "number",
        message: "Employee ID:",
        name: "id"
    },
    {
        type: "input",
        message: "Email:",
        name: "email"
    },
    {
        type: "input",
        message: "School:",
        name: "school"
    }
];

function addMember() {
    inquirer
        .prompt(menuQuestion)
        .then((data) => {
            console.log(data);
        });
}

function addEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((data) => {
            team.push(new Engineer(data.name, data.id, data.email, data.office));
            console.log(team);
            addMember();
        });
}

function init() {
    inquirer
        .prompt(managerQuestions)
        .then((data) => {
            team.push(new Manager(data.name, data.id, data.email, data.office));
            console.log(team);
            addMember();
        });

}

init();