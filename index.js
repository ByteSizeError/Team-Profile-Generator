const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const team = []; // array for the team

// question for additional memebers
const menuQuestion = [
    {
        type: "list",
        message: "Add Team Member?",
        name: "member",
        choices: ["Engineer", "Intern", "Finish Building Team"]
    }
];

// questions for the manager
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

// questions about the engineer
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

// questions about the intern
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
    // ask to add additional member
    inquirer
        .prompt(menuQuestion)
        .then((data) => {
            console.log(data);
            switch (data.member) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "Finish Building Team":
                    // end program
                    createHTML(); // create html file
                    console.log(team); // for checking
                    break;
                default:
                    return;
            }
        });
}

// adds an engineer
function addEngineer() {
    // asks for the engineers info
    inquirer
        .prompt(engineerQuestions)
        .then((data) => {
            team.push(new Engineer(data.name, data.id, data.email, data.github));
            console.log(team); // for checking
            addMember();
        });
}

// adds an intern
function addIntern() {
    // asks for the interns info
    inquirer
        .prompt(internQuestions)
        .then((data) => {
            team.push(new Intern(data.name, data.id, data.email, data.school));
            console.log(team); // for checking
            addMember(); // call to add additional members 
        });
}

// gets the icon for employees specific role
function memberRoleIcon(role) {
    switch (role) {
        case "Manager":
            return '<i class="fas fa-mug-hot"></i>';
        case "Engineer":
            return '<i class="fas fa-laptop-code"></i>';
        case "Intern":
            return '<i class="fas fa-graduation-cap"></i>';
        default:
            return;
    }
}

// function helps to creat HTML file
function createHTML() {
    let contentTeam = "";

    // loops through all team members added
    for (let i = 0; i < team.length; i++) {
        const member = team[i];

        let memberSpecial = ""

        // switch statement to determine whats their role
        switch (member.getRole()) {
            case "Manager":
                memberSpecial =
                    `<th>Office:</th>
                    <td>${member.getOffice()}</td>`;
                break;
            case "Engineer":
                memberSpecial =
                    `<th>GitHub:</th>
                    <td><a href="https://github.com/${member.getGithub()}" target="_blank">${member.getGithub()}<a></td>`;
                break;
            case "Intern":
                memberSpecial =
                    `<th>School:</th>
                    <td>${member.getSchool()}</td>`;
                break;
            default:
                return;
        }

        // member info under their name and role
        let memberInfo =
            `<table>
                <tr>
                    <th>ID:</th>
                    <td>${member.getId()}</td>
                <tr>
                <tr>
                    <th>Email:</th>
                    <td><a href="mailto:${member.getEmail()}" target="_blank">${member.getEmail()}</a></td>
                <tr>
                <tr>
                    ${memberSpecial}
                <tr>
            </table>`;

        // HTML content for employees
        let contentMember =
            `<div class="member">
                <h2>${member.getName()}</h2>
                <h2>${memberRoleIcon(member.getRole())} ${member.getRole()}</h2>
                ${memberInfo}
            </div>`;

        contentTeam += contentMember;
    }

    // the rest of the HTML file that contains the head and body
    const contentHTML =
        `<!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link rel="stylesheet" type="text/css" href="./assets/css/reset.css" />
            <link rel="stylesheet" type="text/css" href="assets/css/style.css"/>            
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">     
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">   
            <title>Team Roster</title>
        </head>

        <body>
            <header>
                <h1>Team Roster</h1>
            </header>
            <main id="team">
                ${contentTeam}
            </main>
        </body>
        </html>`;

    // create teamroster.html file inside the dist folder
    fs.writeFile('dist/teamroster.html', contentHTML, function (err) {
        if (err) throw err;
        console.log("Team Roster Created!");
        console.log("Located at Team-Profile-Generator > dist > teamroster.html");
    })
}

// starts the application
function init() {
    // start by asking for the managers info
    inquirer
        .prompt(managerQuestions)
        .then((data) => {
            team.push(new Manager(data.name, data.id, data.email, data.office));
            console.log(team); // for checking
            addMember(); // call addMember() to add additional members
        });
}

init();