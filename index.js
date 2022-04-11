const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = "../utils/generateMarkdown.js";
const { title } = require("process");

// TODO: Create an array of questions for user input
class promptUser {
  constructor() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "What's the name of your project? (required)",
          validate: (projectInput) => {
            if (projectInput) {
              return true;
            } else {
              console.log("Please enter your project name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "username",
          message: "What is your GitHub username?",
          validate: (usernameInput) => {
            if (usernameInput) {
              return true;
            } else {
              console.log("Please enter your username!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "gitLink",
          message: "Please enter your GitHub account URL",
          validate: (linkInput) => {
            if (linkInput) {
              return true;
            } else {
              console.log("Please enter a description!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message:
            "Please provide your email address for any questions related to the project and contribution",
          validate: (emailInput) => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please enter a description!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "description",
          message: "Provide a description about your project (required)",
          validate: (descInput) => {
            if (descInput) {
              return true;
            } else {
              console.log("Please enter a description!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "usage",
          message: "Please describe how to use this application. (required)",
          validate: (usageInput) => {
            if (usageInput) {
              return true;
            } else {
              console.log("Please enter a usage description!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "installation",
          message: "Please provide installation instructions for your project",
          validate: (installInput) => {
            if (!installInput) {
              this.message = "No instructions necessary.";
            }
          },
        },
        {
          type: "input",
          name: "contributors",
          message:
            "Please provide the GitHub links for contributors to your project here",
        },
        {
          type: "confirm",
          name: "testAsk",
          message: "Would you like to add tests for your code?",
          default: false,
          validate,
        },
        {
          type: "confirm",
          name: "licenseConfirm",
          message: "Would you like to add a license?",
          default: false,
        },
      ])
      .then((licenseData) => {
        if (licenseData.licenseConfirm) {
          renderLicenseLink(licenseData);
        }
        return [""];
      });
  }
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
