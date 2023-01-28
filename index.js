const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const generateHtml = require("./lib/Generatehtml")
const inquirer = require("inquirer");
const fs = require("fs")

let teamMembers = []


function init() {
    inquirer.prompt([
        {
            type: "list",
            message: "Add Team Member ?",
            choices: ["Add Manager", "Add Intern", "Add Engineer", "Generate HTML"],
            name: "menu"
        }
    ]).then(response => {
        switch (response.menu) {
            case "Add Manager":
                addManager();
                break;
            case "Add Intern":
                addIntern();
                break;
            case "Add Engineer":
                addEngineer();
                break;
            case "Generate HTML":
                addGenerateHtml();
                break;
        }
    })
}


function addManager() {
    inquirer.prompt([{
        type: "input",
        message: "Enter Manager Name",
        name: "name"
    },
    {
        type: "input",
        message: "Enter Manager Id",
        name: "Id"

    },
    {
        type: "input",
        message: "Enter Manager Email",
        name: "Email"

    },
    {
        type: "input",
        message: "Enter Manager Office Number",
        name: "OfficeNumber"

    },

    ]).then(response => {
        const newHire = new Manager(response.name, response.Id, response.Email, response.OfficeNumber)
        teamMembers.push(newHire)
        init()
    })
}
function addIntern() {
    inquirer.prompt([{
        type: "input",
        message: "Enter Intern Name",
        name: "name"
    },
    {
        type: "input",
        message: "Enter Intern Id",
        name: "Id"

    },
    {
        type: "input",
        message: "Enter Intern Email",
        name: "Email"

    },
    {
        type: "input",
        message: "Enter Intern School Name",
        name: "SchooolName"

    },

    ]).then(response => {
        const newHire = new Intern(response.name, response.Id, response.Email, response.SchoolName)
        teamMembers.push(newHire)
        init()
    })
}
function addEngineer() {
    inquirer.prompt([{
        type: "input",
        message: "Enter Engineer Name",
        name: "name"
    },
    {
        type: "input",
        message: "Enter Engineer Id",
        name: "Id"

    },
    {
        type: "input",
        message: "Enter Engineer Email",
        name: "Email"

    },
    {
        type: "input",
        message: "Enter Github",
        name: "Github"

    },

    ]).then(response => {
        const newHire = new Engineer(response.name, response.Id, response.Email, response.Github)
        teamMembers.push(newHire)
        init()
    })
}
function addGenerateHtml() {
  fs.writeFile("index.html",generateHtml(teamMembers),(err) => {
    if(err) throw err;
  })
}

init()