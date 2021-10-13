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

function createHTML() {
    let contentTeam = "";

    for (let i = 0; i < team.length; i++) {
        const member = team[i];

        let memberSpecial = ""
            
        switch(member.getRole()) {
            case "Manager":
                memberSpecial = 
                `<th>Office Number:</th>
                <td>${member.getOffice()}</td>`;
                break;
            case "Engineer":
                memberSpecial = 
                `<th>GitHub:</th>
                <td>${member.getGithub()}</td>`;
                break;
            case "Intern":
                memberSpecial = 
                `<th>School:</th>
                <td>${member.getSchool()}</td>`;
                break;
            default:
                return;
        }

        let memberInfo =
            `<table>
                <tr>
                    <th>ID:</th>
                    <td>${member.getId()}</td>
                <tr>
                <tr>
                    <th>Email:</th>
                    <td>${member.getEmail()}</td>
                <tr>
                <tr>
                    ${memberSpecial}
                <tr>
            </table>`;

        let contentMember =
            `<div>
                <h2>${member.getName()}</h2>
                <h2>${member.getRole()}</h2>
                ${memberInfo}
            </div>`;
        
        contentTeam += contentMember;
    }

    const contentHTML =
        `<!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Roster</title>
        </head>

        <body>
            <header>
                <h1>Team Roster</h1>
            </header>
            <main>
                ${contentTeam}
            </main>
        </body>
        </html>`;

    fs.writeFile('dist/teamroster.html', contentHTML, function (err) {
        if (err) throw err;
        console.log("Team Roster Created!");
    })
}

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