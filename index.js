const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let finalTeam = [];



function startPrompt() {
    inquirer.prompt([
        {
            message: "Let's make a team profile! What is the name of your team?",
            name: "teamname",
            type: "input"
        }
    ])
        .then(function (data) {
            const teamName = data.teamname
            finalTeam.push(teamName)
            addManager();
        })
}

function addManager() {
    inquirer.prompt([
        {
            message: "What is the name of the team manager?",
            name: "name"
        },
        {
            type: "number",
            message: "What is the ID number of the team manager?",
            name: "id"
        },
        {
            message: "What is the email of the team manager?",
            name: "email"
        },
        {
            type: "number",
            message: "What is the office number of the team manager?",
            name: "officeNumber"
        },

    ])
        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const officeNumber = data.officeNumber
            const teamMember = new Manager(name, id, email, officeNumber)
            finalTeam.push(teamMember)
            addTeamMember();

        });
}

function addTeamMember() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add more to your team?",
            choices: ["Yes, I want to add an Engineer", "Yes, I want to add an Intern", "No, I am finished building my team"],
            name: "addNewMember"
        }
    ])
        .then(function (data) {
            switch (data.addNewMember) {
                case "Yes, I want to add an Engineer":
                    addEngineer();
                    break;

                case "Yes, I want to add an Intern":
                    addIntern()
                    break;
                case "No, I am finished building my team":
                    createProfile();
                    break;
            }
        });
}

function addEngineer() {
    inquirer.prompt([
        {
            message: "What is the name of the engineer?",
            name: "name"
        },
        {
            type: "number",
            message: "What is the ID number of the engineer?",
            name: "id"
        },
        {
            message: "What is the email address of the engineer?",
            name: "email"
        },
        {
            message: "What is the Github username of the engineer?",
            name: "github"
        }
    ])
        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            finalTeam.push(teamMember)
            addTeamMember()
        });
};

function addIntern() {
    inquirer.prompt([
        {
            message: "What is the name of the intern?",
            name: "name"
        },
        {
            type: "number",
            message: "What is the ID number of the intern?",
            name: "id"
        },
        {
            message: "What is the email address of the intern?",
            name: "email"
        },
        {
            message: "What is the intern's school?",
            name: "school"
        }
    ])
        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            finalTeam.push(teamMember)
            addTeamMember()
        });
};

function createProfile() {
    console.log("Congratulations! Your file is now in the dist folder.");

    const htmlComplete = []
    const htmlStart =
        `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${finalTeam[0]}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text-center">
                    ${finalTeam[0]}
                    </h1>
                    <br>
                    <div id="employees" class="row">
                    `
    htmlComplete.push(htmlStart);

    for (let i = 1; i < finalTeam.length; i++) {
        let employeeCard = `
        <div id="employeeCard" class="col-md-4">
    <div class="card text-black">
        <h5 class="card-header bg-primary">
            ${finalTeam[i].name}
        </h5>
        <div class="card-body">
            <p class="card-text">
                ID: ${finalTeam[i].id}
                <br>
                Email: <a href="mailto${finalTeam[i].email}">${finalTeam[i].email}</a>
               `
        if (finalTeam[i].officeNumber) {
            employeeCard += `
        <br>
        Office Number: ${finalTeam[i].officeNumber}
        `
        }
        if (finalTeam[i].github) {
            employeeCard += `
        <br>
        Github: <a href="https://github.com/${finalTeam[i].github}">${finalTeam[i].github}</a>
        `
        }

        if (finalTeam[i].school) {
            employeeCard += `
        <br>
        School: ${finalTeam[i].school}
        `
        }

        employeeCard += `
            </p>
        </div>
        <h5 class="card-header">
            ${finalTeam[i].title}
        </h5>
    </div>
</div>
`
        htmlComplete.push(employeeCard)
    }
    const htmlEnd = `
    </div>
            </div>
            <footer>
                <br>
                <p> Made with 🐎 by Cassandra Hurlbut &copy; 2020 Cassandra Hurlbut </p>
            </footer>
</body>

</html>
`
    htmlComplete.push(htmlEnd);

    fs.writeFile(`./dist/${finalTeam[0]}.html`, htmlComplete.join(""), function (err) { })
}

startPrompt()

