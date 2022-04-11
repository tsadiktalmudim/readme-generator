const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown, renderLicenseBadge, renderLicenseSection } = require('./utils/generateMarkdown.js');
const { title } = require("process");

// TODO: Create an array of questions for user input
const promptUser =
//   return inquirer
//     .prompt([
    [
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
        message: "What is your GitHub username? (required)",
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
        message: "Please enter your GitHub account URL (required)",
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
          "Please provide your email address for any questions related to the project and contribution (required)",
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
      },
      {
        type: "confirm",
        name: "licenseConfirm",
        message: "Would you like to add a license?",
        default: false,
      },
    ];
    // .then((licenseData) => {
    //   if (licenseData.licenseConfirm) {
    //     renderLicenseSection(licenseData);
    //   }
    //   return [""];
    // })
    // .then(data => {
    //     console.log(data)
    //     fs.writeFile('./dist/README.md', generateMarkdown(data), (err) => {
    //         if (err) {
    //             console.log(err)
    //         } else {
    //             console.log('success')
    //         }
        // })
    // })
// };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(promptUser).then((data) => {
        console.log(data);
        fs.writeFile('GeneratedREADME.md', generateMarkdown(data), (err) => err ? console.log('ERROR!') : console.log('README has been generated!'))
    })
}

// Function call to initialize app
init();
// promptUser();
